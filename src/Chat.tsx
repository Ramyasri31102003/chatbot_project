import "./Chatbot.sass"
import"./components/Style.scss"
import { HiPaperAirplane } from "react-icons/hi2";
import ChatBot from './components/ChatBot';
import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";

export type MyContextType={
  user:boolean;
  setUser:React.Dispatch<React.SetStateAction<boolean>>;
  values_1:string;
};
export const contextApi=createContext<MyContextType|null>(null);
const MyComponent: React.FC = () => {
  const [state,setState]=useState<string>("");
  const [values_1,setValues_1]=useState<null|string>(null);
  const[user,setUser]=useState<boolean>(true);

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    // let {name,value}=e.target;
    setState(e.target.value);
    console.log(state);
  }
  
  const handleClick=()=>{
      setValues_1(state);
      setState("");
 }

 const KeyEnter=(e:React.KeyboardEvent<HTMLInputElement>)=>{
  if(e.key==="Enter"){
    setValues_1(state);
    setState("");
  }
 }
    return (
      <main className="main">
        <section id="container">
          <header id="head">
            <div id="img"></div>
            <div id="h5">
              <h5>{user?"Active":"InActive"}</h5>
            </div>
            <div id='back-btn'><Link to='/mainpage' className='end-chat'>X</Link></div>
            <div id="h4">
               <h4>Fire Flink chat bot</h4>
            </div>
          </header>
          <div id="chatbot-container">
          <div id="inner-chatbot">
            <contextApi.Provider value={{user,setUser,values_1}}>

            <ChatBot search={values_1}/>
            </contextApi.Provider>
            </div>
            
          </div>
          <footer id="footer">
            <div id="text">
            <input type="text" placeholder="enter text....." value={state} onChange={handleChange} onKeyDown={KeyEnter}/>
            <span id="icon" onClick={handleClick}>
              <HiPaperAirplane/>
              </span>
            </div>
          </footer>
        </section>
      </main>
    );
  }
export default   MyComponent;

export  const useMyContext=()=>{
  const context=useContext(contextApi);
  if(!context){
    throw new Error("your context is not working")
  }
  return context;
}