import React from 'react'

function MyButton(props) {
    return (
        <button onClick={props.onClick} style={{border:'none',color:'red',}}>{props.title}</button>
    )
}

export default MyButton
