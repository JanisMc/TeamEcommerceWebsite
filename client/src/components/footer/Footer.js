import React from 'react'
import Image from '../img/Image'
import './Footer.css'


const Footer = (props) => {
    return (
        <div className = "footer">
            <div className = "divFooter1">
            <h2 class = "footerText"> About</h2>
            <h2 class = "footerText"> Careers</h2>
            <h2 class = "footerText"> Our Mission</h2>
            <h2 class = "footerText"> Contact Us</h2>
            </div>
            <div className = "divFooter2">
            <h2 class = "footerText"> Accepted Payments Methods</h2>
            <Image img = 'Stripe' class = "stripe"/>
            <Image img = 'PayPal' class = "paypal"/>
            <Image img = 'Visa' class = "visa"/>
            </div>
            <div className = "divFooter3">
            <h2 class = "footerText"> Created by LogiCoders</h2>
            <Image img = 'CreativeCommons' class = "creativeCommons"/>
            </div>
            <div className = "divFooter4">
            <h2 class = "footerText"> Terms and Conditions</h2>
            <h2 class = "footerText"> Cookies</h2>
            </div>
        </div>
    )
}

export default Footer