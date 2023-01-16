function ValidateEmail(mail) 
{
  //console.log(mail)
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true);
  }
    console.log("You have entered an invalid email address!")
    return (false)   
}

module.exports = {
    ValidateEmail,
}