import React from 'react'
import styles from './Registration.module.scss'
export default function PasswordStrength({ result , StrengthPassLabel}) {
    const num = result.score * 100 / 4
    function ProgressColor() {
        switch (result.score) {
            case 0 :
                return '#828282';
            case 1:
                return '#EA1111';
            case 2 :
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none'
        }
    }

    const ChangePasswordColor = () => ({
        transition: 'width 500ms',
        width: `${num}%`,
        background: ProgressColor(),
        height: '7px',
        borderRadius: '4px',
    })
    return (
        <div style={{width:'100%', display:'flex' , justifyContent:'center', flexDirection:'column' , alignItems:'center'}}>
            <div className={styles.passwordStrength} style={{
                marginTop: '5px',
                width: '87%',
                height: '7px',
                backgroundColor: 'lightgrey',
                borderRadius: '4px'
            }}>
                <div style={ChangePasswordColor()}></div>
            </div>
            <p style={{color: ProgressColor() , width:'87%'}}>{StrengthPassLabel()}</p>
        </div>
    )
}