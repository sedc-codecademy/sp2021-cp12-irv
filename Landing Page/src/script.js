// Get elements
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
const pageMask = document.getElementById("page-mask");
const popUpSignUp = document.getElementById("popup-window");
const linkToSignUp = document.getElementById("openSignInPanel")
const socialMediaBtns = document.getElementsByClassName("social-media-logo");

const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


console.log(popUpSignUp);

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
});


//admin test sign in test
signInBtn.addEventListener('click',()=>{       
    if(userNameInput.value == "admin" && passwordInput.value == "admin"){
        location.href = "../../Admin Panel/AdminPanel.html"; 
    }

    if(userNameInput.value == "user" && passwordInput.value == "user"){
        location.href = "../../ProfilePage/index.html"; 
    }
});