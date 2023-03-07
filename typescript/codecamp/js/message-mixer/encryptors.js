// Import the encryptors functions here.
// Encryption Functions
/////////////////////////////////////////////

const caesarCipher = (str, amount = 0) => {
    if (amount < 0) {
        return caesarCipher(str, amount + 26)
    }
    let output = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i)
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + amount) % 26) + 65)
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + amount) % 26) + 97)
            }
        }
        output += char
    }
    return output
}

const symbolCipher = (str) => {
    const symbols = {
        i: '!',
        '!': 'i',
        l: '1',
        1: 'l',
        s: '$',
        $: 's',
        o: '0',
        0: 'o',
        a: '@',
        '@': 'a',
        e: '3',
        3: 'e',
        b: '6',
        6: 'b',
    }

    let output = ''
    for (let i = 0; i < str.length; i++) {
        let char = str.toLowerCase()[i]

        if (symbols[char]) {
            output += symbols[char]
        } else {
            output += char
        }
    }
    return output
}

const reverseCipher = (sentence) => {
    let words = sentence.split(' ')
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('')
    }
    return words.join(' ')
}

const encodeMessage = (str) => {
    // Use the encryptor functions here.
}

const decodeMessage = (str) => {
    // Use the encryptor functions here.
}

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim()
    let output
    if (process.argv[2] === 'encode') {
        output = encodeMessage(str)
    }
    if (process.argv[2] === 'decode') {
        output = decodeMessage(str)
    }

    process.stdout.write(output + '\n')
    process.exit()
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ')
process.stdin.on('data', handleInput)
