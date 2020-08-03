
let mismatchAlert = document.getElementById("mismatchAlert");
let matchAlert = document.getElementById("matchAlert");

let notify = document.getElementById("notify");
function alertRemover(){
    matchAlert.style.display = "none"
    mismatchAlert.style.display = "none"
    
}

function fontAndColorFixer(){
    confirmationPinShow.style.color = "white";
    confirmationPinShow.style.fontSize="40px"
}




let pinGeneratorBtn = document.getElementById("pinGeneratorBtn");
let generatedPinShow = document.getElementById("generatedPinShow");

pinGeneratorBtn.addEventListener("click", function(){
    let randomRange = []
  for(let i=1000; i<9999; i++){
      randomRange.push(i);
  }
   let random = Math.ceil(Math.random()*8999);
   generatedPinShow.value = randomRange[random];

   alertRemover()
   fontAndColorFixer()
   confirmationPinShow.value=""
   confirmationPinSubmit.disabled=false;
   tryCount.innerText=3;

   confirmationPinSubmit.style.backgroundColor="#495BC3";
    confirmationPinSubmit.style.color="white";
   
}
)





let slicer = document.getElementById("slicer");

slicer.addEventListener("click", function(){
    
   confirmationPinShow.value = confirmationPinShow.value.slice(0,-1);
   if(confirmationPinShow.value.length<4){
       alertRemover()
       
   }
})


let clear = document.getElementById("clear");

clear.addEventListener("click",function(){
    confirmationPinShow.value="";
    alertRemover()
    fontAndColorFixer()
})


let confirmationPinShow = document.getElementById("confirmationPinShow");
let confirmationPinSubmit = document.getElementById("confirmationPinSubmit");

confirmationPinSubmit.addEventListener("click", function(){
    if(confirmationPinShow.value.length==4){
        if(confirmationPinShow.value==generatedPinShow.value){
             matchAlert.style.display = "block";
        }else{
             mismatchAlert.style.display = "block";
        }
    }else{
        confirmationPinShow.value="input 4 digit number"
        confirmationPinShow.style.color = "red";
        confirmationPinShow.style.fontSize="20px"
    }

    let tryCount = document.getElementById("tryCount");
    let decrease = parseInt(tryCount.innerText)-1
    tryCount.innerText = decrease;
    if(tryCount.innerText==0){
        if(generatedPinShow.value == confirmationPinShow.value){
            tryCount.innerText=3;
        }else{
            confirmationPinSubmit.disabled=true;
            confirmationPinSubmit.style.backgroundColor="grey";
            confirmationPinSubmit.style.color="white";
        }
    }
    
})


confirmationPinShow.addEventListener("click",function(){
    confirmationPinShow.value = "";
    fontAndColorFixer()
    alertRemover()
})
