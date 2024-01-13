import React from 'react'
import { useState } from 'react'
import Dashboard from '../components/Dashboard'
import Records from '../components/Records'

function WorkExperience() {
  const [category,setCategory]=useState("Teaching");
  let faculty_role="faculty";
  let faculty_id="1";
  console.log(category);
  // console.log(DB.data[0])
  return (
    <div className='w-screen h-screen'>
    <Dashboard setCategory={setCategory}/>
    {category?(<Records admin={faculty_role=="admin"?true:false} category={category} faculty_id={faculty_id}/>):<></>}
    </div>
  )
}

export default WorkExperience