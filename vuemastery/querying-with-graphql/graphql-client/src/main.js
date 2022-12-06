import { createApp, h, provide } from 'vue'
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    split,
} from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import typeDefs from './graphql/typedefs.gql'
import FAVORITE_BOOKS_QUERY from './graphql/favoriteBooks.query.gql'

import App from './App.vue'

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/graphql`,
    options: {
        reconnect: true,
    },
})

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
})



const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink
)

const resolvers = {
    Mutation: {
        addBookToFavorites: (_, { book }, { cache }) => {
            // Our mutation should modify the favoriteBooks array in the cache, so let’s retrieve this array reading the favoriteBooksquery first:
            const data = cache.readQuery({ query: FAVORITE_BOOKS_QUERY })
            // Now, we need to create a new object where favoriteBooks contains the previous list and a new book:
            const newData = {
                favoriteBooks: [...data.favoriteBooks, book],
              }
            //   Finally, we need to write this new data back to the cache and return an array of books:
            cache.writeQuery({ query: FAVORITE_BOOKS_QUERY, data: newData })
            return newData.favoriteBooks
        },
}
}

const cache = new InMemoryCache()

cache.writeQuery({
    query: FAVORITE_BOOKS_QUERY,
    data: {
        favoriteBooks: [
            {
                __typename: 'Book',
                title: 'My Book',
                id: 123,
                rating: 5,
            },
        ],

    },
})

const apolloClient = new ApolloClient({
    link,
    cache,
    typeDefs,
    resolvers,
})

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})

app.mount('#app')
