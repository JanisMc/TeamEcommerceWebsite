import React from 'react'
import Image from '../img/Image'
import './Banner.css'

const Banner = (props) => {
    return (
        <div className = "banner">
            <Image img = 'Banner' class = "bannerImg"/>
            <h1 class = "title">SJJ Tech</h1>
            <h2 class = "motto">Technology Made Possible</h2>
            <Image img = 'Discount' class = "discount"/>

        </div>
    )
}

export default Banner