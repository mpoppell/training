interface ToDo {
    id: number;
    title: string
    status: Status
    completedOn?: Date
}

enum ToDoStatus {
    Done = 'done',
    InProgess = 'in-progress',
    ToDo = 'todo',
}


const todoItems: ToDo[] = [
    { id: 1, title: "Learn HTML", status: ToDoStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: ToDoStatus.InProgess },
    { id: 3, title: "Write the best app in the world", status: ToDoStatus.ToDo },
]


function addTodoItem(todo: string): ToDo {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: ToDoStatus.ToDo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends {id: number}>(items: T[]) : number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))