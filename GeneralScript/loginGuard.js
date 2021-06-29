
//RETURN TO LOGIN PAGE IF ANYONE NOT LOGGED IN TRIES TO ACCESS SOME OF THE PAGES
if (sessionStorage.getItem('loggedIn') != 'true'){
    location.href = "../Landing Page/index.html";
} 
