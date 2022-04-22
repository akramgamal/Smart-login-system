document.getElementById("mainBtn").addEventListener('click',function(){
    window.location.href="index.html";
})
let user=localStorage.getItem('user');
document.getElementById("welcome").innerHTML="Welcome "+ user;