import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'> 
      <div className="footerFrom">
        <div className="footerFromLeft">
           <div className="footerLeftMain">
           <h1>Contact Us</h1>
            <p>Feel Free to contact us any time. We will get back to you soon as we can!.</p>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Doe' />
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder='Email'/>
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="5" placeholder='Write your message...'></textarea>
            </form>
           </div>
        </div>
        <div className="footerFormRight">
            <h1>Contact Information</h1>
            <div className='iconDiv'><i class="fa-solid fa-phone-volume"></i><span>+10123456789</span></div>
            <div className='iconDiv'><i class="fa-regular fa-envelope"></i><span>demo@gmail.com</span></div>
            <div className='iconDiv'><i class="fa-solid fa-location-dot"></i><span>132 Dartmouth street Boston, Massachusetts 02156 United States</span></div>
        </div>
        <div className='footerIcons'>
     <div className="icon">
     <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
     </div>
      </div>
      </div>
     
    </div>
  )
}

export default Footer
