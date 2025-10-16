import React from 'react'
import { useState } from 'react'
const Contact = () => {
  const [form,setForm]=useState({
    name:'',
    email:'',
    password:'',
    gender:'',

  })
  const handleChange=(e)=>{
      const {name,value} = e.target
      //setForm([name],value) //only last change
      setForm((prev)=>({
        ...prev,
        [name]:value
      }))

    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(form)
    }
  return (
    <div>
      <h1>Contact</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" value={form.name} placeholder="Enter your name" onChange={handleChange} /><br/>
        <label htmlFor="">E-mail:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} /><br/>
        <label htmlFor="">Password:</label>
        <input type="text" name="password" value={form.password} onChange={handleChange}/><br/>
        <label htmlFor="">Gender:</label>
        <input type="radio" name="gender" onChange={handleChange}/>Male
        <input type="radio" name="gender" onChange={handleChange}/>Female
        <br/><br/>
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default Contact
