const profileDiv = document.getElementById('profileDiv');
const profileButton = document.getElementById('profileButton');
const joinUsDiv = document.getElementById('joinUsDiv');
const logOutDiv = document.getElementById('logOutDiv');
const logOutButton = document.getElementById('logOutButton');

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


//JOIN US
joinUsDiv.style.display = 'flex';
if (sessionStorage.getItem('loggedIn') == 'true') joinUsDiv.style.display = 'none';

//LOGOUT
logOutDiv.style.display = 'none';
if (sessionStorage.getItem('loggedIn') == 'true') logOutDiv.style.display = 'flex';
logOutButton.addEventListener('click', () => {
    location.href = "../Landing Page/index.html";
    sessionStorage.setItem('loggedIn', 'false');
    sessionStorage.setItem('credentials', 'none');
});