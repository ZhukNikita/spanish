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
import CourseInfoPage from "./components/CourseInfoPage/CourseInfoPage";
import FeedBackPage from "./components/FeedbackPage/FeedBackPage";
import {CourseOne} from "./components/constants/courses/courseOne";
import {CourseTwo} from "./components/constants/courses/courseTwo";

function App() {
    const {store} = useContext(Context);
    useEffect(()=>{
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    },[])
    return (
    <div className="App">
        <Routes>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/auth/registration' element={<RegistrationComponent/>}/>
            <Route path='/' element={<CoursesComponent/>}/>
            <Route path='/course1' element={<CourseInfoPage course={CourseOne} />}/>
            <Route path='/course2' element={<CourseInfoPage course={CourseTwo} />}/>
            <Route path='/forgotpass' element={<ForgotPassword/>}/>
            <Route path='/feedbacks' element={<FeedBackPage isLoading = {store.isLoading}/>}/>
            <Route path='/sendMessage' element={<SendMessage/>}/>
            <Route path='/recover/:link' element={<RecoverPass/>}/>
            <Route path='*' element={<NoMatch/>}/>
        </Routes>
    </div>
  );
}

export default observer(App);
