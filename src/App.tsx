import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MyComponent from './Chat';
import GetStarted from './components/getstarted/GetStarted';
// import Layout from './components/Layout';
import MainPage from './components/MainPage/MainPage';
import LandingPage from './LandingPae';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';

const router=createBrowserRouter([
  {
   path:"/",
   element:<LandingPage/>
  },{
   path:"/signin",
   element:<SignIn/>
  },{
    path:"/signup",
  element:<SignUp/>
  
  },
  {
    path:"/MainPage",
    element:<MainPage/>
  },{
    path:'/GetStarted',
    element:<GetStarted/>
  },
  {
    path:'/chatbot',
    element:<MyComponent/>
  }
 

])
const App = () => {
 
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App