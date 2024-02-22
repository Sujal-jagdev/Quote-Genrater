"use client"
import React, { useState } from 'react'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const page = () => {
  const [users, setusers] = useState([""])
  const [users_2, setusers_2] = useState([""])

  const qute = async ()=>{
    const res_1 = await axios.get('https://api.quotable.io/random');
    let min_res_1 = res_1.data.author;
    setusers(min_res_1)
  }
  const qute_2 = async ()=>{
    const res_2 = await axios.get('https://api.quotable.io/random');
    let min_res_2 = res_2.data.content;
    setusers_2(min_res_2)
    console.log(res_2)
  }
  return (
    <>
        <div className='main col-lg-5 col-md-9 col-sm-12 col-12'>
          <div>
          <h2> Quote Genrater</h2>
          <button className='btn bg-danger text-light mt-3' onClick={()=>{
            qute();
            qute_2();
          }}>Get New Quote </button>
          </div>
          <hr />
          <h6>{
            Object.values(users_2).map((e)=>{
              return e;
            })
            }</h6>
           
          {/* <button className='btn bg-danger text-light' onClick={qute}>Get Author Name</button> */}
          
          <div className='d-block mt-4'>
        <p className='mt-3'>{Object.values(users).map((e)=>{
          return e;
        })} </p>
        </div>
        </div>
    </>
    
  )
}

export default page