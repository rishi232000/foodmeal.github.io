console.log("hello world")

const email=document.getElementById('email');
const go=document.getElementById('go');

email.addEventListener('keyup',function(event){
    isValidEmail=email.checkValidity();
    if(isValidEmail){
        go.disabled=true;
    }
    else{
        go.disabled=false;
    }
});

document.getElementById('go').addEventListener('click',function(){
    alert("thanks for contacting us");
})