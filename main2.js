let nameInput=document.getElementById("name");
let emailInput=document.getElementById("email");
let passInput=document.getElementById("password");
let btn=document.getElementById("mainBtn");
let users=[];
if(localStorage.getItem('users')!=null){
    users=JSON.parse(localStorage.getItem('users')); 
}

btn.addEventListener('click',function(){
    if(nameInput.value=="" || emailInput.value=="" ||passInput.value==""){
     document.getElementById('status').innerHTML="All inputs is required";
     document.getElementById('status').style.cssText="color:red;";
    }else if(search()){
        document.getElementById('status').innerHTML="email already exists";
        document.getElementById('status').style.cssText="color:red;";
    }
    else{
        let user={
            name:nameInput.value,
            email:emailInput.value,
            password:passInput.value,
        }
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        document.getElementById('status').innerHTML="Success";
        document.getElementById('status').style.cssText="color:green;";
    }
   
})
function search(){
    for(let i=0;i<users.length;i++){
        if(users[i].email==emailInput.value){
            return true;
        }
    }
    return false;
}