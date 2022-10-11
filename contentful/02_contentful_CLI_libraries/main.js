var contentful = require('contentful');

var client = contentful.createClient({
    space: '6j90cacbhcbd',
    accessToken: 'cJmpuVWgY9ruUcMqAmIddUOv0FvmvFMk0VRJ4y3Xeps',
});


// Request a single entry

client.getEntry('4jsKYb9iTAvBvLbamB8ktU').then(function (entry) {
    // logs the entry metadata
    console.log(entry.sys);

    // logs the field with ID title
    console.log(entry.fields.productName);
});

// Retrieve all entries of a space
client.getEntries().then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
        console.log(entry);
        if (entry.fields.productName) {
            console.log(entry.fields.productName);
        }
    });

});