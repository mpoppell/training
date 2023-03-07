interface Contact {
    id: number;
    name: string;
}

function clone(source: Contact) {
    return Object.apply({}, source);
}

