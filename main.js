/// all pattern initialized
const firstLastNamePattern = /[A-Za-z.]{3,15}$/;
const userNamePattern = /\w{5,10}\d{2,5}/;

// /\w{2,}@\w{2,20}\.\w{2,5}/gim
// example212@gamil.com
const emailPattern = /\w{2,20}(\.)?\w{2,20}@\w{2,8}\.\w{3}/;
let strongPasswordPattern = new RegExp('(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*');

/// all selector
const firstNameElm = document.querySelector('#firstName')
const lastNameElm = document.querySelector('#lastName')
const firstNameMsgElm = document.querySelector('.invalid-feedback-firstName')
const lastNameMsgElm = document.querySelector('.invalid-feedback-lastName')

const userNameElm = document.querySelector('#userName')
const emailElm = document.querySelector('#email')
const userNameMsgElm = document.querySelector('.invalid-feedback-user-name')
const emailMsgElm = document.querySelector('.invalid-feedback-email')

const passElm = document.querySelector('#password')
const passwordMsgElm = document.querySelector('.invalid-feedback-password')

const confirmPassElm = document.querySelector('#confirm-pass')
const confirmPassMsgElm = document.querySelector('.invalid-feedback-confirm-pass')

const submitBtnElm = document.querySelector('.submit-button');

function submitButton(e) {
    e.preventDefault();
    console.log(firstNameElm.value);
    console.log(lastNameElm.value);
    console.log(userNameElm.value);
    console.log(emailElm.value);
    console.log(passElm.value);
    console.log(confirmPassElm.value);

    if(firstNameElm.value === '' && lastNameElm.value === '' && userNameElm.value === '' && emailElm.value === '' && passElm.value === '' && confirmPassElm.value === '') {
        alert('Please fill all the input fields')
    } else {
        alert('You have provided all necessary information. Check console to see your input')
    }

    // clear all the input
    clearInput();
};

function clearInput() {
    firstNameElm.value = '';
    lastNameElm.value = '';
    userNameElm.value = '';
    emailElm.value = '';
    passElm.value = '';
    confirmPassElm.value = '';
}

function firstName() {
    let firstName = firstNameElm.value;
    let regexFirstName = firstLastNamePattern.test(firstName);

    if(firstName === '') {
        firstNameMsgElm.innerHTML = `<span>Enter First Name</span>`
    } else if(regexFirstName === true) {
        firstNameMsgElm.innerHTML = '';
    } else if(regexFirstName === false) {
        firstNameMsgElm.innerHTML = `<span>Enter valid First Name</span>`
    }
};

function lastName() {
    let lastName = lastNameElm.value;
    let regexLastName = firstLastNamePattern.test(lastName);

    if(lastName === '') {
        lastNameElm.innerHTML = `<span>Enter First Name</span>`
    } else if(regexLastName === true) {
        lastNameElm.innerHTML = '';
    } else if(regexLastName === false) {
        lastNameElm.innerHTML = `<span>Enter valid Last Name</span>`
    }
};

function userName() {
    let userName = userNameElm.value;
    let regexUserName = userNamePattern.test(userName);

    if(userName === '') {
        userNameMsgElm.innerHTML = `<span>Please Enter a User Name</span>`;
    } else if(regexUserName === true) {
        userNameMsgElm.innerHTML = '';
    } else if(userName === false) {
        userNameMsgElm.innerHTML = `<span>Please Enter a Valid User Name</span>`;
    };
}

function email() {
    let email = emailElm.value;
    let regexEmail  = emailPattern.test(email);

    if(email === '') {
        emailMsgElm.innerHTML = `<span>Enter Your Email</span>`
    } else if(regexEmail === true) {
        emailMsgElm.innerHTML = '';
    } else if (regexEmail === false) {
        emailMsgElm.innerHTML = `<span>Enter a valid Email</span>`
    }
};

function password() {
    let password = passElm.value;
    let regexStrongPassword = strongPasswordPattern.test(password);

    if(password === '') {
        passwordMsgElm.innerHTML = `<span>Please Enter Your Password</span>`;
    } else if (regexStrongPassword === true) {
        passwordMsgElm.innerHTML = `<span>Strong Password</span>`;
    } else {
        passwordMsgElm.innerHTML = `<span>Weak Password</span>`;
    }
};

function confirmPassword() {
    let confirmPassword = passElm.value;

    if(confirmPassword === '') {
        confirmPassMsgElm.innerHTML = `<span>Please confirm password</span>`;
    } else if(confirmPassword === passElm.value) {
        confirmPassMsgElm.innerHTML = '';
    } else {
        confirmPassMsgElm.innerHTML = `<span>Password Does Not Match</span>`;
    }
}

/// event listeners
firstNameElm.addEventListener('input', firstName);
lastNameElm.addEventListener('input', lastName );
userNameElm.addEventListener('input', userName );
emailElm.addEventListener('input', email);
passElm.addEventListener('input', password);
confirmPassElm.addEventListener('input', confirmPassword);
submitBtnElm.addEventListener('click', submitButton)