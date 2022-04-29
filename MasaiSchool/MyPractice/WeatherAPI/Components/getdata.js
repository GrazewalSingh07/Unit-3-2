 
  async function mydata(){
    try {
        let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`,
            }
        });
        let data= await res.json() 
        console.log(data)
        
      }
       catch (error) {
          console.log(error)
      }
   
   }
 Module.exports.mydata=mydata