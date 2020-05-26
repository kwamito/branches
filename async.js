const loginVal = (username, password) => {
    return new Promise((resolve, reject) => {
        if (username == 'kwame' && password == 'kwame'){
            resolve(`Welcome ${username}`)
        }else{
            reject('Wrong username and password')
        }
    })
}

function promo(response){
    return new Promise((resolve, reject) => {
        resolve('You are logged in now')
    })
}

let loginProv = async (name, password) => {
    try{
        const rep = await loginVal(name, password)
        console.log('Loading response')
        let given = await promo(rep)
        console.log(given)
    }catch (err){
        console.log('Processing')
        console.log(err)
    }
}

loginProv('kwame','kwam')