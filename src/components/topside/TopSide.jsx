import React from 'react'
import './TopSide.css'

const TopSide = () => {
  return (
    <div className='topSide'>
      <div className="leftside">
        <h1>Start Your IELTS Prepration And Get Desire Bands</h1>
        <ul className='ulList'>
            <li>Get access to IELTS Centralised Library</li>
            <li>British Council Certified Teacher</li>
        </ul>
        <div className="formDiv">
            <form action="">
              <div className="formDivTitles">
                <div className="formDivTitle">
                    <span className='countSpan'>1</span>
                    <span>Start</span>
                </div>
                <div className="formDivTitle">
                    <span className='countSpan'>2</span>
                    <span>Fill Detail</span>
                </div>
                <div className="formDivTitle">
                    <span className='countSpan'>3</span>
                    <span>Confirm</span>
                </div>
              </div>
              <div className="form">
                <h2>Free IELTS Classes</h2>
                <input type="text" placeholder='Enter Your Name' />
                <div className="mobileBox">
                    <select name="" id="">
                        <option value="india"><span><img src="https://cdn.countryflags.com/thumbs/india/flag-400.png" alt="" /></span>+91</option>
                    </select>
                    <input type="text"  placeholder='Phone Number'/>
                </div>
                <button>Continue</button>
                    <p className='policyText'>By continuing, you agree to our Term of services & Privacy policy</p>
              </div>
            </form>
        </div>
      </div>
      <div className="rightside">
        <img src="/img1.jpg" alt="" />
      </div>
    </div>
  )
}

export default TopSide
