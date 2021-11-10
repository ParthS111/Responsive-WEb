import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'red', 'green', 'blue']

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {

        const checkButtonStyle=STYLES.includes(buttonStyle)?buttonStyle :STYLES[0]
        const checkButtonSize=SIZES.includes(buttonSize)?buttonSize :SIZES[0]
        const checkButtoColor=COLOR.includes(buttonColor)?buttonColor :null
        console.log(checkButtoColor,"checkButtoColor",checkButtonSize)
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtoColor}`} onClick={onClick} type={type}>
            {children}
        </button>

    )
}