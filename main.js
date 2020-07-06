// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


const Kata1 = document.createElement('h1')
main.append(Kata1)
Kata1.append('Kata 1: ')

const isActiveFilter = users.filter(user => user.isActive)
main.append(JSON.stringify(isActiveFilter))
console.log(isActiveFilter)



const Kata2 = document.createElement('h1')
main.append(Kata2)
Kata2.append('Kata 2: ')

const emailAddressMap = users.map(user => user.email)
main.append(JSON.stringify(emailAddressMap))
console.log(emailAddressMap)



const Kata3 = document.createElement('h1')
main.append(Kata3)
Kata3.append('Kata 3: ')

const companyOvation = users.some(user => user.company == 'OVATION')
main.append(JSON.stringify(companyOvation))
console.log(companyOvation)



const Kata4 = document.createElement('h1')
main.append(Kata4)
Kata4.append('Kata 4: ')

const olderThan38 = users.find(user => user.age > 38)
main.append(JSON.stringify(olderThan38))
console.log(olderThan38)



const Kata5 = document.createElement('h1')
main.append(Kata5)
Kata5.append('Kata 5: ')

const olderThan38isActive = users
    .filter(user => user.age > 38)
    .find(user => user.isActive)
main.append(JSON.stringify(olderThan38isActive))
console.log(olderThan38isActive)



const Kata6 = document.createElement('h1')
main.append(Kata6)
Kata6.append('Kata 6: ')

const balanceOfZenco = users
    .filter(user => user.company == 'ZENCO')
    .map(user => user.balance)
main.append(balanceOfZenco)
console.log(balanceOfZenco)



const Kata7 = document.createElement('h1')
main.append(Kata7)
Kata7.append('Kata 7: ')

const ageOfFugiat = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)
main.append(JSON.stringify(ageOfFugiat))
console.log(ageOfFugiat)