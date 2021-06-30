
const goToGallery = document.getElementById("galleryLink");
const artistPanel = document.getElementById("artistPanel");
const artistGallery = document.getElementById("artistGallery");
 


goToGallery.addEventListener("click", function(){
    artistPanel.style.display = "none";

    artistGallery.style.display = "flex";
})

