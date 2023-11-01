function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ceWhquvxO/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(e, r){
    if (e) {
        console.error(e);
    }
    else {
        console.log(r);
        soundname = r[0].label;
        soundconfidence =( r[0].confidence *100).toFixed(3);
        document.getElementById("result_label").innerHTML="I can Hear "+soundname;
        document.getElementById("result_confidence").innerHTML="Accuracy: "+soundconfidence;
        img1=document.getElementById("pic");
        if(soundname=="dog noise "){
            img1.src="dog.gif";
        }
        else if(soundname=="cat noise"){
            img1.src="cat.gif";
        }
        else{
            img1.src="ear.gif";
        }
        }
}