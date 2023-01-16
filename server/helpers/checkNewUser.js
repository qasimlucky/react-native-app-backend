const userDetails = require('../../server/models/user/userDetail')

async function isUserData(user_id) {
        const newuserdata = await userDetails.findOne({user_id: user_id});
    
        const dogPerson = pick(newuserdata,"full_name", "dob","interest","perfile_pic","intro_video","height");
            
            const isNullish = Object.values(dogPerson)
            var isNewUser = false;
                isNullish.forEach(element =>{
                if(element == null){
                   isNewUser = true;
                    console.log ("element is found")
                }
            })
            return isNewUser;
}




function pick(obj, ...props) {
    return props.reduce(function(result, prop) {
      result[prop] = obj[prop];
      return result;
    }, {});
}


module.exports = {
    isUserData,
}