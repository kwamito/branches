

function talk(words) {
    return new Promise((resolve,reject) => {
        if (typeof(words) == 'string'){
            resolve(words)
        }else{
            reject('Invalid words, words must be of string type eg:ABCabc')
        }
    })
    
}

function say(respone) {
    return new Promise((resolve) => {
            resolve(`Autobot says ${respone}`)           
    })
}

let input = async (word) =>{
    try{
    console.log("Entering input")
    const talks = await talk(word);
    console.log('Processing...')
    const botMessage = await say(talks)
    console.log('Finished')
    console.log(botMessage)
    }catch(err){
        console.log(`Autobot cannot respond due to this error: ${err}`)
    }

}

input('44')