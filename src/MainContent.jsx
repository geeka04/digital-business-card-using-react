import React from "react"
import my_image from './assets/components/woman.png'
export default function MainContent(){
    return(
        <div className="Maindiv">
            <img src = {my_image} alt = 'image of a woman'/>
            <p className="name">Laura Smith</p>
            <p className="position">Front Developer</p>
            <p className="website">/lauras.wesbsite</p>
        </div>
    )
}
