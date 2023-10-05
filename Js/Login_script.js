const username = document.getElementById('username')
const email = document.getElementById('email')
const pass1 = document.getElementById('password1')
var flag1 = 0, flag2 = 0, flag3 = 0;

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
    if(flag1 == 0 && flag2 == 0 && flag3 == 0){
        alert("Login success!");
        location.href="HOMEPAGE.html";
    }
})

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value.trim();
    const pass1Value = pass1.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'username must be filled');
        flag1 = 1;
    } else if(usernameValue.length < 5 || usernameValue.length > 20){
            setErrorFor(username, 'username must be between 5-20 characters')
            flag1 = 1;
    } else{
        setSuccessFor(username);
        flag1 = 0;
    }

    if(emailValue === ''){
        setErrorFor(email, 'email must be filled');
        flag2 = 1;
    } else if(!emailValue.endsWith("@gmail.com")){
        setErrorFor(email, 'email must end with @gmail.com');
        flag2 = 1;
    } else{
        setSuccessFor(email);
        flag2 = 0;
    }

    if(pass1Value === ''){
        setErrorFor(pass1, 'please fill this field');
        flag3 = 1;
    } else if(pass1Value.length < 6){
        setErrorFor(pass1, 'password must have minimum 6 characters');
        flag3 = 1;
    } else{
        setSuccessFor(pass1);
        flag3 = 0;
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'input-box error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'input-box success';
}