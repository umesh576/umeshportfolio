function generateOtp (length){
    let otp;
    for(let i=0; i< length; i++){
        otp += Math.floor(Math.random()*10).toString;
    }
    return(otp);
    
}
let x = generateOtp(5)
console.log(x);