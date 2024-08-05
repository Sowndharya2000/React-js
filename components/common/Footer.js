import React from 'react'

const Footer =()=>{
    return(
        <footer>
        
        <div class="footer-col">
            <h3>Top products</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Manage Website</li>

        </div>
        <div class="footer-col">
            <h3>Web Developer</h3>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
        </div>
        <div class="footer-col">
            <h3>Newsletter</h3>
            <p>Website</p>
            <div class="subscribe">
                <input type="text"placeholder="your email address"/>
                <a href="#" class="yellow">SUBSCRIBE</a>
            </div>

        </div>
        <div class="copyright">
            <p>copyright @2024 All rights reserved|This Template is made by Sowndharya</p>
         </div>
         </footer>
    
     


    )


}
export default Footer