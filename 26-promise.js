const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise One resolved.');
        resolve();
    }, 4000);
})

promiseOne.then(()=>{
    console.log('Promise One consumed.');
})

new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('Promise Two resolved.');
        resolve();
    }, 2000);
}).then(()=>{
    console.log('Promise Two consumed.');
});