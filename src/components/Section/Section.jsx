import React from 'react'
import InfoBox from '../InfoBox/InfoBox'
import "./Section.css"

export default function Section({heading}) {
  return (
    <div className='section'>
      <h1 className="heading">{heading}</h1>
      <div className="boxes">
        <InfoBox title="Cooking Tips" message={"This is a test"} img="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
        <InfoBox title="Dietary Information" message={"This is a test"} img="https://images.unsplash.com/photo-1498491480129-04f6d95c90be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
        <InfoBox title="Community" message={"This is a test"} img="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
      </div>
    </div>
  )
}
