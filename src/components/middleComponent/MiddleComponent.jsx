import React from 'react'
import './middleComponent.css'

const MiddleComponent = () => {

    return (
        <div className='middleComponent'>
            <div className='middleComponentleft'>
                <img src="/mobile.jpg" alt="" />
            </div>
            <div className="right">
                <h1>Our Services</h1>
                <div className='rightTop'>
                    <div className='rightTopContent'>
                        <img src="/pic4.jpg" alt="" className='rightTopContentImg'/>
                        <h4 className='rightTopComponentHeading'>Accomodation</h4>
                        <ul>
                            <li>20,000+ Listed Properties across 5 countries</li>
                            <li>100+ cities</li>
                        </ul>
                    </div>
                    <div className='rightTopContent'>
                        <img src="/pic4.jpg" alt="" className='rightTopContentImg'/>
                        <h4 className='rightTopComponentHeading'>Visa Application</h4>
                        <ul>
                            <li>By Industry leading immigration Consultants</li>
                            <li>Quick & Hassle Free Visa Filing</li>
                        </ul>
                    </div>
                </div>
                <div className="rightBottom">
                    <div className='rightBottomContent'>
                        <img src="/pic4.jpg" alt="" className='rightTopContentImg'/>
                        <h4 className='rightTopComponentHeading'>Centralized Community</h4>
                        <ul>
                            <li>talk to international student community</li>
                            <li>Ask your queries and doubts</li>
                        </ul>
                    </div>
                    <div className='rightBottomContent'>
                        <img src="/pic4.jpg" alt="" className='rightTopContentImg'/>
                        <h4 className='rightTopComponentHeading'>Education Loan</h4>
                        <ul>
                            <li>100% Funding quick loan sanction!</li>
                            <li>Pre-admission loan</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MiddleComponent
