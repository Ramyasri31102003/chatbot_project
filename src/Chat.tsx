import "./Chatbot.sass"
import"./components/Style.scss"
import { HiPaperAirplane } from "react-icons/hi2";
import ChatBot from './components/ChatBot';
import { createContext, useContext, useState } from "react";

export type MyContextType={
  user:boolean;
  setUser:React.Dispatch<React.SetStateAction<boolean>>;
};
export const contextApi=createContext<MyContextType|null>(null);
const MyComponent: React.FC = () => {
  let [state,setState]=useState<string>("");
  let [val,setVal]=useState<null|string>(null);
  let[user,setUser]=useState<boolean>(true);

  let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    // let {name,value}=e.target;
    setState(e.target.value);
    console.log(state);
  }
  
  let handleClick=()=>{
      setVal(state);
 }
    return (
      <main>
        <section id="container">
          <header id="head">
            <div id="img"></div>
            <div id="h5">
              <h5>{user?"Active":"InActive"}</h5>
            </div>
          </header>
          <div id="chatbot-container">
          <div id="inner-chatbot">
            <contextApi.Provider value={{user,setUser}}>

            <ChatBot search={val}/>
            </contextApi.Provider>
            </div>
            
          </div>
          <footer id="footer">
            <div id="text">
            <input type="text" placeholder="enter text....." value={state} onChange={handleChange}/>
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
  let context=useContext(contextApi);
  if(!context){
    throw new Error("your context is not working")
  }
  return context;
}