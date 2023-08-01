import React from 'react'
import './ratings.css'
const Ratings = () => {
    return (
        <div className='ratings'>
            <div className="left">
                <h1 className='leftHeading'><span className='firstName'>Freda</span> Collier</h1>
                <div className="divleftDes">
                <i class="fa-solid fa-quote-left commaLeft"></i>
                <p className='detailedText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus, laudantium recusandae eaque dolorem eveniet ea optio ipsum ullam officia unde eos corporis quia cupiditate illum odio. Tenetur, reprehenderit non?
                </p>
                <i class="fa-solid fa-quote-right commaright"></i>
                </div>
               <div className="RatingIcons">
                <i class="fa-solid fa-angle-left"></i>
               <span className='ratingPageCount'>01/<sub>04</sub></span>
               <i class="fa-solid fa-angle-right commaRight"></i>
               </div>
            </div>
            <div className="right">
                <span className='rightBlankSpan'>
                    <div>
                        <img src="/ratingPic.jpg" alt="" />
                    </div>
                </span>
            </div>

        </div>
    )
}

export default Ratings
