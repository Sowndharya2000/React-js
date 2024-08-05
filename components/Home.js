import React from 'react'
const Home = () => {
    return(

        <div>
            <section id="Home">
        
        <h2>Web Development</h2>
        <p>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.
        </p>
        <div class="btn">
            <a  class="blue" href="#">Learn more</a>
            <a class="yellow" href="#">visit Courses</a>

        </div>
    </section>

    <section class="container">
        <h1 class="heading">our services</h1>
        <div class="box-container">
            <div class="box">
                <img src="html1.png"alt=""/>
                <h3>Html</h3>
                <p>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.
                </p>
                <a href="#"class="btn">Read more</a>


            </div>
            <div class="box">
                <img src="css.png"alt=""/>
                <h3>css</h3>
                <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.
                </p>
                
                <a href="#"class="btn">Read more</a>
            </div>
            <div class="box">
                <img src="js.png"alt=""/>
                <h3>Javascript</h3>
                <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages.

                </p>
                <a href="#"class="btn">Read more</a>
            </div>
         </div>
     </section>
     </div>
     
     
   

    )
}
export default Home