let p = new Promise((resolve, reject) => {
    let a = 2 + 1
    if ( a==2 ){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then '+ message)
}).catch((message) => {
    console.log('This is in the catch '+ message)
})

let me = new Promise((success, error) => {
    let name = 'Kwame'
    if (name == 'Kame'){
        success('It worked')
    }else{
        error('Failed to execute')
    }
})

me.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})