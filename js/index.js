let inputName = document.querySelector("#name")
let emailSignUp = document.querySelector("#email-signup")
let passwordSignUp = document.querySelector("#password-signup")
let emailSignIn = document.getElementById("email")
let passwordSignIn = document.getElementById("password")

let filterPassword = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
var signUpList = []
if (localStorage.getItem("dataUser")!= null) {
    signUpList = JSON.parse(localStorage.getItem("dataUser"))
}
function signUp() {
    var user = {
        name : inputName.value,
        email : emailSignUp.value,
        password : passwordSignUp.value,
    }
    let resE =  valedemail() 
    let resP = valedPassword()
    if (inputName.value != "" && resE == true && resP == true) {
        document.getElementById("Success").style.display = "block"
        document.getElementById("required").style.display = "none"
        signUpList.push(user)
    }
    else{
        document.getElementById("Success").style.display = "none"
        document.getElementById("required").style.display = "block"
    }
    passwordSignUp.addEventListener("blur",valedPassword)
    emailSignUp.addEventListener("blur",valedemail)
    localStorage.setItem("dataUser",JSON.stringify(signUpList))
}
function signIn() {

    for (var i = 0; i < signUpList.length; i++) {
        if (emailSignIn.value == signUpList[i].email && passwordSignIn.value == signUpList[i].password) {
            console.log("1012"); 
            localStorage.setItem("CurrentUser",signUpList[i].name)
            window.location.href ="welcome.html"
            // document.getElementById("welcome").innerHTML = `welcome `+signUpList[i].name+``
        }
        else if (emailSignIn.value == "" || passwordSignIn.value == "" ){
            document.getElementById("allRe").style.display = "block"
            document.getElementById("incorrect").style.display = "none"
        }
        else if (emailSignIn.value != signUpList[i].email || passwordSignIn.value != signUpList[i].password) {
            document.getElementById("incorrect").style.display = "block"
            document.getElementById("allRe").style.display = "none"
        } else {
            document.getElementById("allRe").style.display = "block"
        }
    }
}

function valedPassword() {
    let filterPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
    if (filterPassword.test(passwordSignUp.value) == true) {
        return true
    }   

}
function valedemail() {
    let filter = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
        if (filter.test(emailSignUp.value) == true) {
            console.log("mm");
            return true
        }
        
}

