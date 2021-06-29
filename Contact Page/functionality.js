$("input1").text("Nikola Davitkovski");
$("input2").text("ndavitkovski@yahoo.com");
$("input3").text("Programming quiz");
$("input4").text("This is a test about basic web programming. It requires skills from HTML,CSS and Javascript.");

$(button).click(function(){
    fetch('https://inroompreview.com/')
    .then(function(response){
        console.log(response);
    }).then(function(message){
        getMessage(message);
    }).catch(function(error){
        console.log(error);
    })
})

function getMessage(message){
    for(let info of message){
        let basicInfo = document.createElement("p");
        basicInfo.textContent = `This quiz requires knowledge from areas such as HTML,CSS and JavaScript. It is intended to
        check how much the student is familiar with the basic concepts about web programming.`;
    }
}