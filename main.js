let emailInput=document.getElementById("email");
let passInput=document.getElementById("password");
let btn=document.getElementById("mainBtn");
btn.addEventListener('click',function(){
    let users=JSON.parse(localStorage.getItem('users'));
    if(emailInput.value=="" ||passInput.value==""){
        document.getElementById('status').innerHTML="All inputs is required";
        document.getElementById('status').style.cssText="color:red;";
     }else{
        let valid=false;
        for(let i=0;i<users.length;i++){
            if(users[i].email==emailInput.value && users[i].password==passInput.value){
                window.location.href="home.html";
                localStorage.setItem('user',users[i].name);
                valid=true;
                break;
            }
        }
        if(!valid){
            document.getElementById('status').innerHTML="incorrect email or password";
            document.getElementById('status').style.cssText="color:red;";
        }
     }
  
})