import React, { useState } from 'react'
import "./Filter.css"
import {links} from "../../assets/images-links.js"

function Filter() {

    const[selectedFilter,setselectedFilter] = useState("");


  return (
    <div className='filter-div'> 
        {links.map((item,i)=>{
            return(
                <div className={`fliter-flex ${i == selectedFilter && "selected-filter"}`} onClick={()=>{
                    // console.log("Selected key = ",i)

                    setselectedFilter(i)

                    }}>
                    <img key={i} src={item.imgSrc} />
                    <p className={`${i == selectedFilter && "selected-label"}`}>{item.label}</p>
                </div>
            ) 
        })}
    </div>
  )
}

export default Filter