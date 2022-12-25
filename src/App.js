import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/LoginComponent/Login";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import './App.css'
import NoMatch from "./components/NoMatch/NoMatch";
import CoursesComponent from "./components/CoursesComponent/CoursesComponent";
import {observer} from "mobx-react-lite";
import RegistrationComponent from "./components/RegistrationComponent/RegistrationComponent";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SendMessage from "./components/ForgotPassword/SendMessage";
import RecoverPass from "./components/RecoverPass/RecoverPass";
import CourseOne from "./components/CourseOne/CourseOne";

function App() {
    const {store} = useContext(Context);
    useEffect(()=>{
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    },[])
    if(store.isLoading){
        return <div>Завантаження...</div>
    }

    return (
    <div className="App">
        <Routes>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/auth/registration' element={<RegistrationComponent/>}/>
            <Route path='/courses' element={<CoursesComponent/>}/>
            <Route path='/course1' element={<CourseOne/>}/>
            <Route path='/forgotpass' element={<ForgotPassword/>}/>
            <Route path='/sendMessage' element={<SendMessage/>}/>
            <Route path='/recover/:link' element={<RecoverPass/>}/>
            <Route path='*' element={<NoMatch/>}/>
        </Routes>
    </div>
  );
}

export default observer(App);
