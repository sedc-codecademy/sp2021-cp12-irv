const dropdownMenuBtn = document.getElementById("dropdownMenuBtn")
const menuBtn = document.querySelector('.menu-btn');
const dropdownMenuOptions = document.getElementById("dropdownMenu");
const goToGallery = document.getElementById("galleryLink");
const artistPanel = document.getElementById("artistPanel");
const artistGallery = document.getElementById("artistGallery");

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


goToGallery.addEventListener("click", function(){
    artistPanel.style.display = "none";

    artistGallery.style.display = "flex";
})

