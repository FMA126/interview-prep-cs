const list = require('./linked-list')
const LinkedList = list.LinkedList
const Node = list.Node

const PhoneList = new LinkedList()
PhoneList.prepend('505-555-5555')
PhoneList.prepend('713-555-5555')
PhoneList.prepend('520-555-5555')
PhoneList.append('720-555-5555')
PhoneList.append('303-555-5555')
PhoneList.append('418-555-5555')
PhoneList.append('920-555-5555')
// console.log(JSON.stringify(PhoneList, null, '\t'))
console.log('Searching...:', PhoneList._search('920-555-5555'))
console.log('Last: ', PhoneList.last())
console.log('Length: ', PhoneList.length())
console.log('Removing...: ', PhoneList.remove('720-555-5555'))
console.log('Inserting...: ', PhoneList.insertAfter('520-555-5555', '835-555-5555'))
console.log(JSON.stringify(PhoneList, null, '\t'))
