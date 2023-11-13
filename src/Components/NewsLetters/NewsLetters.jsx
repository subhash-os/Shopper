import React from 'react'
import './NewsLetters.css'

const NewsLetters = () => {
  return (
    <div className='newsletter'>
      <h1>Get exclusive offers on your emal</h1>
      <p>Subcribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='your email id' />
        <button>Subcribe</button>
      </div>
    </div>
  )
}

export default NewsLetters
