import React from "react"
import twitter_icon from './assets/components/twittericon.png'
import fb_icon from './assets/components/fbicon.png'
import ig_icon from './assets/components/igicon.png'
import github_icon from './assets/components/githubicon.png'

export default function Footer(){
    return(
        <div className="footerdiv">
            <img src = {twitter_icon}></img>
            <img src = {fb_icon}></img>
            <img src = {ig_icon}></img>
            <img src = {github_icon}></img>
        </div>
    )
}