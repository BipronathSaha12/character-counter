//Add aos library to scroll 
AOS.init({
    offset: 300,
    duration:500,
    delay:0,
    easing: 'ease', 
});

//JS for enable buttons and show the result after counting 

//function for counting the characters and words
function count(){

    //initialize variable
    let countText = document.querySelector("#characters");
    let showData = document.querySelector("#showData");
    let cCount = countText.value.length; //to show how many characters in the text
    let wCount = countText.value.trim().split(" ").length; //to show how many words in the text
    if((wCount != "") && (cCount != "")){
        showData = showData.innerHTML = "There is " + cCount + " characters " + " and " + wCount + " words ."
        return showData;
    }
    else{
        alert("There is 0 character 0 word.")
    }
}

//function  for cleaning the surface 
function clean(){
    document.querySelector("#showData").innerHTML = "";
    document.querySelector("#characters").value = "";
}
