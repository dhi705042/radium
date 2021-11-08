function log(name){
    console.log("my name is " + name)
}

function welcome(){
    console.log("welcom to my application. My name is Dhiraj Kumar")
}

const url = "http://google.com";


module.exports.myLog = log;
module.exports.myWelcome = welcome;
module.exports.myUrl = url;
