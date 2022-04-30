const year = 2022

alert(`Hello, i want to ask to you a little bit of data about yourself`)

let name = prompt(`Please, tell me your name.`)
let surname = prompt(`${name},Would you tell me your surname?`)
let email = prompt(`Would you please tell me your E-mail?`)
let age = prompt(`Let me know your age`)

let results = year - age 

    confirm("Do you confirm our terms of service?")
    if(results < 2005){
        alert(`Hi ${name}, Welcome to my blank website.` )
    }else{
        alert(`Sorry ${name},but you did not make the cut to be in my blank website`)
    }
        
alert(`Hey ${name} ${surname}. Thank you so much for submitting your data, i will print them in the console.`) 

 let data = `your data is \n`
  data = data + name + `\n`
  data = data + surname + ` \n`
  data = data + email + ` \n`
  data = data + age +` years`+ `\n`
  
  console.log(data)
  
     

