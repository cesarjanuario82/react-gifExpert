import React from 'react'

export const GifGridItem = (props) => {

    return (
        <div className="animate__animated animate__fadeIn card">
            <img src={props.url} alt = {props.title}/>
            <p> {props.title} </p>
           
        </div>
    )
}
