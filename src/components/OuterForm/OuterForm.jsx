import React from 'react'
import "./OuterForm.css"

export default function OuterForm({ form: FormComponent}) {
  return (
    <div>
      <FormComponent />
    </div>
  )
}
