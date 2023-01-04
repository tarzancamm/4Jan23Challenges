// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

const abbrevName = (name) => {
    let arr = name.split(' ')
    let firstName = arr[0].split('')
    let lastName = arr[1].split('')

    return `${firstName.shift().toUpperCase()}.${lastName.shift().toUpperCase()}`
}

console.log(abbrevName("Sam Harris")) // S.H