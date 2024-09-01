var textarea = document.getElementById("message");
var characters = document.getElementById("characters");
var words = document.getElementById("words");
var sentences = document.getElementById("sentences");
var paragraphs = document.getElementById("paragraphs");




textarea.addEventListener("input" , function(){

    characters.innerHTML = textarea.value.split("").length;
    words.innerHTML = textarea.value.split(" ").length;
    sentences.innerHTML = textarea.value.split(".").length - 1;
    paragraphs.innerHTML = textarea.value.split("\n").length;


})