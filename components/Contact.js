import React from 'react'

const Contact =()=>{
    return(
       
    
      <div>
        <section id="Contact-Home">
        
        </section>
        <section id="contact">
          <div className="getin">
            <h2>Get in touch </h2>
            <p>Fill the form</p>
            <div className="getin-details">
              <h3>Headquarters</h3>
              <div>
                <p>Rajaji Street</p>
              </div>
              <h3>Phone</h3>
              <div>
                <p>9488874500 <br />978856902</p>
              </div>
              <h3>support</h3>
              <div>
                <p>sound@gmail.com<br />help@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="form">
            <h4>Let's connect</h4>
            <p>Form</p>
            <div className="form-row">
              <input type="text" placeholder="your name" /><br /><br />
              <input type="text" placeholder="Email" />
            </div>
            <div className="form-col">
              <input type="text" placeholder="subject" />
            </div>
            <div className="form-col">
              <textarea name id cols={30} rows={8} placeholder="How can we help?" defaultValue={""} />
            </div>
            <div className="form-col">
              <button>Send Message</button>
            </div>
          </div>
        </section>
        <section id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310658522!2d79.87933474107953!3d13.047985943115949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722508049129!5m2!1sen!2sin" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </section>
      </div>
    );
  }

        
        
      
 
export default Contact
