import React from 'react'

export default function OuterForm({ form: FormComponent}) {
  return (
    <div className='login-form-outer'>
      <FormComponent />
    </div>
  )
}
