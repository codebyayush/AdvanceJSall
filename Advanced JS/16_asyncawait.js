console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
})

const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

const butter = new Promise ((resolve,reject) => resolve(`butter`));

const getColdDrinks = new Promise ((resolve,reject) => resolve(`Cold drinks`));


let ticket = await promiseWifeBringingTicks;

    console.log(`Wife: I have the tickets.`);
    console.log(`Husband: We should go in.`);
    console.log(`Wife: No I'm hungry.`);

let popCorn = await getPopcorn;

    console.log(`Husband: I got some ${popCorn}`)
    console.log(`Wife: I need butter on my popcorn`);

let btter = await butter;

    console.log(`Husband: I got some ${btter} on popcorn`)
    console.log(`Husband: Anything else darling`)
    console.log(`Wife: You forgot cold drinks.`)

let coldDrink = await getColdDrinks;

    console.log(`Husband: I got ${coldDrink}.`)
    console.log(`Wife: Let's go we are getting late`);
    console.log(`Husband: Thank You for the reminder *grins*`);

let [popcorn, btr, coke] = await Promise.all([getPopcorn, butter, coldDrink]);

console.log(`-They get's in with ${popcorn}, ${btr}, ${coke}`);
return ticket;
}


preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4: shows ticket')
console.log('person5: shows ticket')