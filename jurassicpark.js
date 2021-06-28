function checkpass() {
    
    var x = document.getstarted.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf("."); 
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address"); 
        return false;  
    }
    
    let password1 = document.getstarted.pass1.value;
    let password2 = document.getstarted.pass2.value;

    if(password1.length < 6)
    {
        alert("Password should contain atleast 6 characters.");
        return false;
    }
    if(password1 == password2)
    {
        return true;
    }
    else
    {
        alert("Confirm Password not correct.");
        return false;
    }
}