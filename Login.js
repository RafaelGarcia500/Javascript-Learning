let user= `Rafael`
let email=`rafanavone@gmail.com`
let password= `20725829`

let login= prompt(`Hello again ${user}!, Submit your email to enter`)

if(login==false || login==null){
    alert(`Access denied`)
}else if( login !== email){
    alert(`Wrong email.`)
}else {
    if(login===email){
   pw= prompt(`Welcome ${user}, enter your password`)
}

 if(pw==false || pw==null){
    alert(`Acess denied`)
}else if(pw !== password){
    alert(`Wrong Password!`)
}else if(pw === password){ 
    alert(`Welcome!`)
}
}

