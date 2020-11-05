var SpeechRecognition =window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML ="";
    recognition.start();
}

recognition.onresult = function run (event) {
    console.log(event);
    var Content= event.results[0][0].transcript;
    console.log(Content);
document.getElementById("textbox").innerHTML =Content
if  (Content =="take my selfie"){
    console.log("Taking Selfie in 5 seconds")
    speak();
}

}



function speak(){
    var synth = window.speechSynthesis;
     speak_data = "Taking selfie in 5 seconds" 
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis); 
     Webcam.attach(camera);
     setTimeout(function(){
         web();
         save()
     },5000);
}

camera=document.getElementById("camera");
Webcam.set({
    height:250,
    width:360,
image_format:'jpeg',
jpeg_quality:90,
});


function web(){
    Webcam.snap(
function (data_uri){
    document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>'
})
    }
;

function save(){
    link= document.getElementById("link");
    image= document.getElementById("selfie").src;
link.href= image;
link.click();
}