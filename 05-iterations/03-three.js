// for of

// ["","",""]
// [{},{},{}]

const arr = [2,3,4,5,6]

for (const num of arr) {
 //console.log(num)
}

const greetings = "HELLO WORLD!"
for (const greet of greetings) {

console.log(greet)
}

// Maps

const map = new Map()
map.set('In','India')
map.set('Fr','France')

console.log(map);

for (const [key, value] of map) {
    console.log(key,':-',value);
}

const myObject ={
    game1:'NFS',
    game2:'SpiderMan'
}

// for (const [key , value] of myObject) {
//     console.log(key,':-',value);
// }