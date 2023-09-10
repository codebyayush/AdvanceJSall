const post = [];

function updateUsersLastActivity(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const currentTime = new Date()
            const currentHours = currentTime.getHours();
            const currentMint = currentTime.getMinutes();
            const currentSecs = currentTime.getSeconds();
            const time = console.log(`Last seen ${currentHours}:${currentMint}:${currentSecs}`)
            resolve(time);

        }, 1000);
    })
}


function createPost(newPost){

    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            post.push(newPost);
            console.log(post)
            resolve();
        }, 0);
        
    })

}


function deletePost(){

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const popp = post.pop()
            resolve(`Deleted Post:`, console.log(popp));
        }, 0);
    } )
}

Promise.all([createPost({title: 'Post1', body: 'This is Post1'}), updateUsersLastActivity(), deletePost()]);


// Promise.all([]).then((value) => console.log(value));


// posts = [];
// function create4thPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST4'});
//             resolve(posts);
//         }, 2000)
//     })
// }

// create4thPost().then((value) => console.log(value))