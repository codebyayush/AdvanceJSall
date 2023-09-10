console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
})

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log(`Husband: We should go in`);
    console.log(`Wife: No I'm hungry.`);
    return new Promise((resolve, reject) => 
    resolve(`-Walks in with ${t} and popcorn`))
});

getPopcorn.then((t) => console.log(t))

console.log('person4: shows ticket')
console.log('person5: shows ticket')
