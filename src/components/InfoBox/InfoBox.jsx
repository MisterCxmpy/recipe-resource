import React from 'react'
import "./InfoBox.css"

export default function InfoBox({title, message, img}) {
  return (
    <div className="info-card">
      <h1 className="title">{title}</h1>
      <img src={img} />
      <span>
        <p>{message}</p>
      </span>
    </div>
  )
}
