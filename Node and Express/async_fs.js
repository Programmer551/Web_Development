const fs=require("fs")
fs.readFile("./test/first.txt","utf8",(err,result)=>{
    // console.log("hello world")
    if(err){
        console.log("Error Occured")
        return ;
    }
    else if(result=="Duarid is Pro"){
        fs.readFile("./test/second.txt","utf8",(err,result)=>{
            // console.log("hello world")
            if(err){
                console.log("Error Occured")
                return ;
            }
            else if(result=="Duarid is better then Shahmeer"){
              fs.writeFile("./test/third.txt","You Entered every thing correct password",(err,result)=>{
                //   console.log(result)
                                })
            }

            else{
                 console.log("Password is incorrent")
            }
        
        
        })    
    }
    // else{
    //     console.log(result);
    // }


})