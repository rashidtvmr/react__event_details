import React from 'react'

function RegBackgroundComponent(props) {
    return (
        <div className="bg-danger">
            {props.children}
        </div>
    )
}

export default RegBackgroundComponent
