const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise One resolved.');
        resolve();
    }, 1000);
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

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: 'John', age: 30});
    },3000)})

promiseThree.then((data)=>{
    console.log(data);
});

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error) resolve({username: 'chinu', password: '1234'});
        else    reject('Error: Something went wrong');
    }, 4000)})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log('Promise Four is either resolved or rejected');
})

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error) resolve({username: 'chinu', password: '1234'});
        else    reject('Error: JS went wrong');
    }, 5000)})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
consumePromiseFive();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log('Fetch API call completed');
})