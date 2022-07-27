Webcam.set({
   height : 300,
   width : 350,
   image_format:'png',
   png_quality:90
});

my_camera = document.getElementById("Camera");
Webcam.attach(my_camera);

prediction1 = "Happy";
prediction2 = "Sad";


function agent_speak(){
   var my_agent = window.speechSynthesis;
   speak_data_1 = "My first Prediction is  " + prediction1;
   speak_data_2 = "My second Prediction is  " + prediction2;
   var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
   my_agent.speak(utterThis);
}



function take_snapshot(){
     
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
    
    console.log('ml5version :' , ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FlchR8B6h/model.json',modelLoaded);
}


function modelLoaded(){

    console.log('Model Loaded!');
    agent_speak();
    
}