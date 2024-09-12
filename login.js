// this code of javascript is for register section 
//accesing the elements by using thier class name and id
const submitButton = document.querySelector("#submitbut");

const inputUsername = document.querySelector("#inputusername");

const inputLastname = document.querySelector("#inputLastname");

const inputNumber = document.querySelector("#InputNumber")

const messaGe = document.querySelector("#Message");

const inputaDDress = document.querySelector("#Address");

//using function for a checking a right vale or not

//check proper address value
const checkAddress = (Valueaddress) => {
    if(Valueaddress > 3)
    {
        alert("Thank you for register. Now you can able to login");
    }
}
//check proper value of input email or number
const checkNumber = (Valuenumber) => {
    if(Valuenumber > 5)
    {
        const valueAddress = inputaDDress.value.trim().length;
        checkAddress(valueAddress);
    }
}
//check lastname value
const checklastname = (valuelastname) => {
    if(valuelastname > 3)
    {
        const valueNumber = inputNumber.value.trim().length;
        checkNumber(valueNumber);
    }
}
//check username value
const checkusername = (valueUsername) => {
    if(valueUsername > 3)
    {
        const valueLastname = inputLastname.value.trim().length;
        console.log(valueUsername);
        checklastname(valueLastname);
    }
    //if given data is not proper
    else
    {
        messaGe.innerText = "*Please enter authenticate details";
        messaGe.style.color = "red";
    }
}

//using event listernor for tracking our move
submitButton.addEventListener('click', () =>{
    
    const valueusername = inputUsername.value.trim().length;
    
    checkusername(valueusername);        
});
//javascript code for a register section is finished

// this secction of javascript code is for loginpage 

//set some username and pssword for demo of login

let userName = "umesh";
let Password = "joshi";

const Username1 = document.querySelector("#username");
const Password1 = document.querySelector("#password");

const loginBut = document.querySelector("#loginButton");

const MessageLogin = document.querySelector("#messageLogin");


loginBut.addEventListener("click", () =>{

    const valueusernamelogin = Username1.value.trim();
    const valuePasswordLogin = Password1.value.trim();
    if(valueusernamelogin === userName)
    {
        if(valuePasswordLogin === Password)
        {
            console.log("Thankyou for login");
            MessageLogin.innerText = "Loading....";
            window.location ="project1.html";
        }
        else{
            alert("Please enter correct password.");
        }
    }
    else if(valueusernamelogin === "" && valuePasswordLogin === "")
    {
        alert("Please input your password and usernmae for login.");
    }
    else
    {
        MessageLogin.innerText = "*please enter the correct password.";
        MessageLogin.style.color = "red";
        alert("Please enter right password and username.");
    }
});
const forgetten = document.querySelector("#forgetPassword");
forgetten.addEventListener("click", () =>{
    console.log("umesh0");
})
