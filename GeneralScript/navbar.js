const profileDiv = document.getElementById('profileDiv');
const profileButton = document.getElementById('profileButton');
const joinUsDiv = document.getElementById('joinUsDiv');
const logOutDiv = document.getElementById('logOutDiv');
const logOutButton = document.getElementById('logOutButton');

const profileDivDD = document.getElementById('profileDivDropdown');
const profileButtonDD = document.getElementById('profileButtonDropdown');
const joinUsDivDD = document.getElementById('joinUsDivDropdown');
const logOutDivDD = document.getElementById('logOutDivDropdown');
const logOutButtonDD = document.getElementById('logOutButtonDropdown');

console.log(joinUsDivDD)


const dropdownMenuBtn = document.getElementById("dropdownMenuBtn")
const menuBtn = document.querySelector('.menu-btn');
const dropdownMenuOptions = document.getElementById("dropdownMenu");


let menuOpen = false;

dropdownMenuBtn.addEventListener("click", () => {
    if(!menuOpen){
        menuBtn.classList.add("open");
        dropdownMenuOptions.style.display = "flex";
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove("open");
        dropdownMenuOptions.style.display = "none";
        menuOpen = false;
    }
})

window.addEventListener("resize", () => {
    menuBtn.classList.remove("open");
    dropdownMenuOptions.style.display = "none";
    menuOpen = false;
})



//PROFILE
profileDiv.style.display = 'none';
if (sessionStorage.getItem('loggedIn') == 'true') profileDiv.style.display = 'flex';

profileButton.addEventListener('click', ()=>{
    switch (sessionStorage.getItem('credentials')) {
        case 'admin':
            location.href = "../Admin Panel/AdminPanel.html";
            break;
        case 'user':
            location.href = "../ProfilePage/index.html";
            break;
        case 'artist':
            location.href = "../ArtistProfilePage/index.html";
            break;
        default:
            break;
    }
})

//PROFILE ON DROPDOWN MENU
profileDivDD.style.display = 'none';
if (sessionStorage.getItem('loggedIn') == 'true') profileDivDD.style.display = 'initial';

profileButtonDD.addEventListener('click', ()=>{
    switch (sessionStorage.getItem('credentials')) {
        case 'admin':
            location.href = "../Admin Panel/AdminPanel.html";
            break;
        case 'user':
            location.href = "../ProfilePage/index.html";
            break;
        case 'artist':
            location.href = "../ArtistProfilePage/index.html";
            break;
        default:
            break;
    }
})

//JOIN US
joinUsDiv.style.display = 'flex';
if (sessionStorage.getItem('loggedIn') == 'true') joinUsDiv.style.display = 'none';

//JOIN US FOR DROPDOWN MENU
joinUsDivDD.style.display = 'initial';

if (sessionStorage.getItem('loggedIn') == 'true') joinUsDivDD.style.display = 'none';

//LOGOUT
logOutDiv.style.display = 'none';
if (sessionStorage.getItem('loggedIn') == 'true') logOutDiv.style.display = 'flex';
logOutButton.addEventListener('click', () => {
    location.href = "../Landing Page/index.html";
    sessionStorage.setItem('loggedIn', 'false');
    sessionStorage.setItem('credentials', 'none');
});

//LOGOUT FOR DROPDOWN MENU
if (sessionStorage.getItem('loggedIn') == 'true') logOutDivDD.style.display = 'initial';
logOutButtonDD.addEventListener('click', () => {
    location.href = "../Landing Page/index.html";
    sessionStorage.setItem('loggedIn', 'false');
    sessionStorage.setItem('credentials', 'none');
});