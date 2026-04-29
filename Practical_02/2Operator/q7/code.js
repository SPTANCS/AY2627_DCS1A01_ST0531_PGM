function makeMessage(name, yearOfBirth, currentYear) {
    const age = currentYear - yearOfBirth;
    return `${name} (${age})`;
}

// function make3Messages(name1, yearOfBirth1, name2, yearOfBirth2, name3, yearOfBirth3, currentYear) {
//     return `${makeMessage(name1, yearOfBirth1, currentYear)}, ${makeMessage(name2, yearOfBirth2, currentYear)}, ${makeMessage(name3, yearOfBirth3, currentYear)}`;
// }

function make3Messages(name1, yearOfBirth1, name2, yearOfBirth2, name3, yearOfBirth3, currentYear) {
    const str1 = makeMessage(name1, yearOfBirth1, currentYear);
    const str2 = makeMessage(name2, yearOfBirth2, currentYear);
    const str3 = makeMessage(name3, yearOfBirth3, currentYear);

    return `${str1}, ${str2}, ${str3}`;
}



module.exports = make3Messages;

// examples

console.log(make3Messages('John', 1994, 'Mary', 1999, 'Tom', 1986, 2025)); // "John (31), Mary (26), Tom (39)"
