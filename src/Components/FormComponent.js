import React, { useState } from 'react'
import './index.css'
export const FormComponent = () => {
    const [formFields, setFormFields] = useState({
        name:'',
        lastName:'',
        email:'',
        password:''
    })

  const updateFormDetails = (event) => {
    console.log(event.target)
   const {name,value} =event.target
   console.log(name,value);

   setFormFields({
    ...formFields,[name]:value
   })

    }
    console.log(formFields,'formFields')
  return (
    <div className='form-component-parent'>
        <div className='name-input'>
            <label htmlFor='input-label'>Enter the name</label>
            <input 
              type="text"
              key="name"
              id="name"
              name="name"
              value={formFields.name}
              onChange={updateFormDetails}
              />
        </div>
        <div className='lastname-input'>
            <label htmlFor='input-label'>Enter the last name</label>
            <input 
              type="text"
              key="lastName"
              id="lastName"
              name="lastName"
              value={formFields.lastName}
              onChange={updateFormDetails}
              />
        </div>
        <div className='email-input'>
            <label htmlFor='input-label'>Enter the email</label>
            <input 
              type="email"
              key="email"
              id="email"
              name="email"
              value={formFields.email}
              onChange={updateFormDetails}
              />
        </div>
        <div className='password-input'>
            <label htmlFor='input-label'>Enter the password</label>
            <input 
              type="password"
              key="password"
              id="password"
              name="password"
              value={formFields.password}
              onChange={updateFormDetails}
              />
        </div>
        <div className='submit-button'>
         <button className='submit'>
          Submit 
         </button>
        </div>
    </div>
  )
}
