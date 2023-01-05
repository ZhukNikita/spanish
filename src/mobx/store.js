import {makeAutoObservable} from "mobx";
import AuthServices from "../service/AuthServices";
import axios from "axios";
import {API_URL} from "../axios";
export default class Store{
    user = {};
    feedbacks = [];
    isAuth = false;
    isLoading = false;
    errors = '';
    constructor() {
        makeAutoObservable(this);
    }
    setAuth(bool){
        this.isAuth = bool;
    }
    setUser(user){
        this.user = user;
    }
    setFeedbacks(feedbacks){
        this.feedbacks = feedbacks;
    }
    setErrors(error){
        this.errors = error;
    }
    setLoading(bool){
        this.isLoading = bool
    }
    async login(email , password){
        try {
            const response = await AuthServices.login(email , password)
            localStorage.setItem('token' , response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

        }
        catch (e){
            const response = e.response?.data?.message?.status
            this.setErrors(response)
        }
    }
    async registration(name , email , password){
        try {
            const response = await AuthServices.registration(name , email , password)
            localStorage.setItem('token' , response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

        }
        catch (e){
            console.log(e.response?.data?.message)
        }
    }
    async sendRecoverMessage (email){
        try {
            await axios.post(`${API_URL}/recover` , {email})
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async recoverPass (recoverLink , password){
        try {
            await axios.post(`${API_URL}/recover/${recoverLink}` , {recoverLink , password})
        }
        catch (e) {
           alert(e.response?.data?.message?.status);
        }
    }
    async logout(){
        try {
            const response = await AuthServices.logout()
            localStorage.removeItem('token' )
            this.setAuth(false)
            this.setUser({})

        }
        catch (e){
            console.log(e.response?.data?.message)
        }
    }
    async checkAuth(){
        this.setLoading(true)
        try {
            const response = await axios.get(`${API_URL}/refresh` , {withCredentials:true})
            localStorage.setItem('token' , response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }
        catch (e){
            console.log(e.response?.data?.message)
        }finally {
            this.setLoading(false)
        }
    }
    async getFeedbacks(){
        this.setLoading(true)
        try{
            const feedbacks = await axios.get(`${API_URL}/feedbacks`, {withCredentials:true})
            this.setFeedbacks(feedbacks.data)
        }
        catch (e) {
            console.log(e.response?.data?.message)
        }
        finally {
            this.setLoading(false)
        }
    }
}