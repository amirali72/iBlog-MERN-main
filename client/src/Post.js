import React from 'react'
import img2 from './imgs/11.svg';
import './css/mobile.css';

const Post = () => {
  return (
    <>
    
    <div className="article max-width m-auto">
        <div className="box">
            <img src={img2} alt="err"/>
            <div className="boxtext">
                <h3> <a href="/"> How to Study 10 hours a day</a>
                </h3>
                <p classNameName='info'>
                    <span classNameName='author'> Author Name | </span>
                    <time>2023-01-06 16:45</time>
                </p>
                <span className='summary'>
                This is a sentence that I usually heard from my friends back to my country when I shared with them how many hours I need to learn per day when I studied my master's degree at the University of Melbourne, the No. 1 University in Australia, and stands at 33rd globally.
                </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Post
