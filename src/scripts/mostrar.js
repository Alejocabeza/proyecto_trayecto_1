const iconEye = document.querySelector(".icon-eye");

iconEye.addEventListener("click", function (){
    if(this.previousElementSibling.type == "password"){
        this.previousElementSibling.type = "text";
    }else{
        this.previousElementSibling.type = "password";
    }
});

const iconEye1 = document.querySelector(".icon-eye1");

iconEye1.addEventListener("click", function (){
    if(this.previousElementSibling.type == "password"){
        this.previousElementSibling.type = "text";
    }else{
        this.previousElementSibling.type = "password";
    }
});
