function CleanData(data) {
    //console.log("This is me from helper :" + data)
    console.log("This is me from helper :" )
    cleanData = data;
    console.log(JSON.stringify(cleanData))
     var data = Object.keys(cleanData);
     var i=0;
     for (var key in cleanData) {
      if (cleanData.hasOwnProperty(key)) {
          
        item = cleanData[key];
        if(item){
          //console.log(item + "this isssssssss")
          i++;
        }
        if(!item){  
            var p=(data[i])
            delete cleanData[p];
             i++;
        }
        //console.log (i)
      }
    }
    return (cleanData);
}
/*
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true);
  }
    //alert("You have entered an invalid email address!")
    return (false)   
}
*/
module.exports = {
    CleanData,
}