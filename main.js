
var mismatching = document.getElementById("mismatching");
var matching = document.getElementById("matching");

var notify = document.getElementById("check");
function callDecliner(){
    matching.style.display = "none"
    mismatching.style.display = "none"
    
}




function fontAndColorFixer(){
    PinShow.style.color = "white";
    PinShow.style.fontSize="60px"
}




var pinGeneratorBtn = document.getElementById("pinGeneratorBtn");
var generatedPinShow = document.getElementById("generatedPinShow");

pinGeneratorBtn.addEventListener("click", function(){
    var randomRange = []
  for(var i=1000; i<9999; i++){
      randomRange.push(i);
  }
   var random = Math.ceil(Math.random()*8999);
   generatedPinShow.value = randomRange[random];

   callDecliner()
   fontAndColorFixer()
   PinShow.value=""
   PinSubmit.disabled=false;
   tryCount.innerText=3;

   PinSubmit.style.backgroundColor="#495BC3";
    PinSubmit.style.color="white";
   
}
)




var slicer = document.getElementById("slicer");

slicer.addEventListener("click", function(){
    
   PinShow.value = PinShow.value.slice(0,-1);
   if(PinShow.value.length<4){
    callDecliner()
       
   }
})


var clear = document.getElementById("clear");

clear.addEventListener("click",function(){
    PinShow.value="";
    callDecliner()
    fontAndColorFixer()
})


var PinShow = document.getElementById("PinShow");
var PinSubmit = document.getElementById("PinSubmit");

PinSubmit.addEventListener("click", function(){
    if(PinShow.value.length==4){
        if(PinShow.value==generatedPinShow.value){
             matching.style.display = "block";
        }else{
             mismatching.style.display = "block";
        }
    }else{
        PinShow.value="input 4 digit number"
        PinShow.style.color = "red";
        PinShow.style.fontSize="20px"
    }

    var tryCount = document.getElementById("tryCount");
    var decrease = parseInt(tryCount.innerText)-1
    tryCount.innerText = decrease;
    if(tryCount.innerText==0){
        if(generatedPinShow.value == PinShow.value){
            tryCount.innerText=3;
        }else{
            PinSubmit.disabled=true;
            PinSubmit.style.backgroundColor="grey";
            PinSubmit.style.color="white";
        }
    }
    
})



PinShow.addEventListener("click",function(){
    PinShow.value = "";
    fontAndColorFixer()
    callDecliner()
})