// Get elements
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
const pageMask = document.getElementById("page-mask");
const popUpSignUp = document.getElementById("popup-window");
const linkToSignUp = document.getElementById("openSignInPanel")
const socialMediaBtns = document.getElementsByClassName("social-media-logo");


const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


// Dummy artist database

class Artist{
    constructor(name, username, password, email, gallery = new Array()){
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.gallery = gallery;
    }
}

class Painting{
    constructor(name, dimensions, price, url){
        this.name = name;
        this.dimensions = dimensions;
        this.price = price;
        this.url = url;
    }
}

let testArtist = new Artist("Pero Blazovski", "Artist", "password", "email@example.com"); 

let allArtist = [testArtist];

//#endregion

//#region SignIn/SignUp Validations

const usernameTooShort = "Username must be at least 3 characters long.\n";
const passTooShort = "Password must be at least 8 characters long.\n";
const usernameEmpty = "Username input field can't be empty.\n";
const passEmpty = "Password input field can't be empty.\n"
const emailEmpty = "Email input field can't be empty.\n";
const usernameExists = "Username already exists.\n";
const passwordExists = "Password already exists.\n";
const emailExists = "Email already exists.\n";
const noUser = "There is no such user. Please try again.\n";
const artistPage = "artist-panel.html";


const ValidateSignIn = (username, password, users, errMsgPar, newPath) => {

    if(username.length < 3 || password.length < 8){
        if(username.length === 0)
            errMsgPar.innerText += usernameEmpty;
        
        else if(username.length < 3)
            errMsgPar.innerText += usernameTooShort;
            
        if(password.length === 0){
            errMsgPar.innerText += passEmpty;
            errMsgPar.innerText += "Please try again."
            return;
        }
        else if(password.length < 8){
            errMsgPar.innerText += passTooShort;
            errMsgPar.innerText += "Please try again."
            return;
        }
    }
    
    users.forEach(user => {
        if(username === user.username && password === user.password){
            localStorage.setItem("user", username);
            location.href = newPath;
            return loggedInUser;
        }
        else                   
            errMsgPar.innerText = noUser;        
    });
}


const ValidateSignUp = (email, username, password, users, errMsgPar) => {

    users.forEach(user => {
        userExists = false;
        if(email === user.email || username === user.username || password === user.password){
            if(email === user.email)
                errMsgPar.innerText += emailExists;
            
            if(username === user.username)
                errMsgPar.innerText += usernameExists;
            
            if(password === user.password)
                errMsgPar.innerText += passwordExists;
            
            errMsgPar.innerText += "Please try again."
            userExists = true;
            return userExists;
        }
    });

    if(!userExists){
        if(username.length < 3 || password.length < 8 || email.length === 0 || !email.includes("@")){
            if(email.length === 0)
                errMsgPar.innerText += emailEmpty;
            
            else if(!email.includes("@"))
                errMsgPar.innerText += "Email must include @.\n"
            
            if(username.length === 0)
                errMsgPar.innerText += usernameEmpty;
        
            else if(username.length < 3)
                errMsgPar.innerText += usernameTooShort;
    
            if(password.length === 0){
                errMsgPar.innerText += passEmpty;
                errMsgPar.innerText += "Please try again."
                return;
            }
    
            else if(password.length < 8){
                errMsgPar.innerText += passTooShort;
                errMsgPar.innerText += "Please try again."
                return;
            }
        }
        
        loggedInUser = new User(username, password, email);
        
        users.push(loggedInUser);
        errMsgPar.innerText += "Registration successful!\n";
        errMsgPar.innerText += loggedInUser.welcomeUser();
    }
}      

//#endregion



const togglePopUp = toggle => {
    if(toggle){
        popUpSignUp.style.display = "block";
        pageMask.style.display = "block";
    }
   
    else{
        popUpSignUp.style.display = "none";
        pageMask.style.display = "none";
    }
}

for(i = 0; i < socialMediaBtns.length; i++){
    socialMediaBtns[i].addEventListener("click", function(){
        togglePopUp(false);
    })
}

linkToSignUp.addEventListener("click", function(){
    togglePopUp(true);
})

signUpBtn.addEventListener("click", function(){
    togglePopUp(false);
})

///////////////////


// Get elements

//admin test sign in test
signInBtn.addEventListener('click',()=>{       
    if(sessionStorage.getItem('loggedIn') == 'true'){
        alert('Please logout first');
        return;
    }

    if(userNameInput.value == "admin" && passwordInput.value == "admin"){
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('credentials', 'admin');
        location.href = "../../Admin Panel/AdminPanel.html"; 
    }

    if(userNameInput.value == "user" && passwordInput.value == "user"){
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('credentials', 'user');
        location.href = "../../ProfilePage/index.html"; 
    }

    if(userNameInput.value == "artist" && passwordInput.value == "artist"){
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('credentials', 'artist');

        location.href = "../../ArtistProfilePage/index.html"; 
    }
});