let user=`Admin`
let password=`TheMaster`

let login= prompt(`Who is there?`)

 if (login == false || login==null){
     alert(`Canceled`)
 }else if(login != user){
     alert(`I do not know you`)
 }else{
     if(login== user){
       pwr= prompt(`Password?`)}
 }

 if(pwr ==false || pwr==null){
     alert(`Canceled`)
 }else if(pwr !=  password){
     alert(`Wrong Password`)
 }else{
     if(pwr === password){
         alert(`Welcome!`)
     }
 }