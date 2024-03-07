import { useContext, useEffect, useState } from "react"

import MainButton from "./MainButton";
import { userContextApi } from "./Context/Context";
 
export type chatBotProps={
  search:string|null
}
const ChatBot =({search}:chatBotProps) => {


    const [user,setUser]=useState<string>("User");
    const [wait,setWait]=useState<boolean>(false);
    const {name}=useContext(userContextApi);
  

    useEffect(()=>{
      if(name!==null){
        setUser(name)
      }
      setTimeout(()=>{
         setWait(true);
      },1500)
    },[])


   

  return (
    <div>
        <div className="request" key={1}>
          <h2>Hi {user}</h2>
          <p>How can i help you?</p>
    
     
          {wait&&<MainButton search={search} ></MainButton>}
        </div>
    </div>
  )
}

export default ChatBot