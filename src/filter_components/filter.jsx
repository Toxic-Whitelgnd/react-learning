import { useState } from 'react'
import React from 'react'
import clubdata from "../filter_components/api/MOCK_DATA.json"

export default function Filter() {
    // inityiall setting the states
    const [searchterm,setsearchterm] = useState('');
  return (
    <div className='input-search'>
        <input type="text" placeholder="Search..by clubtype" className="input-control" 
        //this is will set the value in the input term
        onChange={e =>{
          setsearchterm(e.target.value);  
        }} />
        {clubdata.filter((value) => {
            if (searchterm == ""){
                return value
            }
            else if ( value.clubtype.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase()) ){
                return value
            }
            else if ( value.clubtitle.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase())){
                return value
            }    
        }).map((val,key)=>{
            return(
                <div className="cards" key={key} >
                    <div className="card-title">
                   <h3>{val.clubtitle}</h3>
                   </div>
                   <div className='card-subtitle'>
                        <h6>{val.clubtype}</h6>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
