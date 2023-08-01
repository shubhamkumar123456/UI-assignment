import React from 'react'
import './topSideBottom.css'

const TopsideBottom = () => {
    const listArr=[
        {
            id:0,
            img:'/pic1.jpg',
            name:"Free IELTS Modules",
            desc:"20,000+ Listed Properties across 5 countries"
        },
        {
            id:1,
            img:'/pic2.jpg',
            name:"Offline Classes",
            desc:"20,000+ Listed Properties across 5 countries"
        },
        {
            id:2,
            img:'/pic3.jpg',
            name:"Live/Online Classes",
            desc:"20,000+ Listed Properties across 5 countries"
        },
    ]
  return (
    <div className='TopsideBottom'>
      {listArr.map((item)=>{
        return <div className='itemList'>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <span>{item.desc}</span>
         
        </div>
      })}
    </div>
  )
}

export default TopsideBottom
