interface Contact extends Address{
    id: number;
    notRequired?: Date
}

interface Contact2{
    id: number;
    notRequired?: Date
    address: Address
}
interface Address {
    postcode: number;
    state: string
}
let primarycontact: Contact = {
    id: 123,
    postcode: 1234,
    state: 'string'
}

let secondarycontact: Contact2 = {
    id: 123,
    address: {
        postcode: 1234,
        state: 'string'
    }
}