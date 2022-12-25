import NavBar from "../NavBar/NavBar";
import {useContext, useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

function SendMessage() {
    const {store} = useContext(Context)

    useEffect(()=>{
    },[])
    return(
        <div>
            <NavBar/>
            <div style={{marginTop:'150px' , textAlign:'center'}}>
                На пошту було відправлено інструкцію для відновлення пароля!
            </div>
        </div>

    )
}
export default observer(SendMessage)