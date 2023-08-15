import React from 'react'
import image2 from './imgs/1.png';

const LandingPage = () => {
  return (
    <div>
        <div className="content max-width m-auto">
            <div className="con-left">
                <h2>
                    The Heaven for Bloggers
                </h2>
                <p>
                Unleash Your Mind's Musings: iBlog - Where Words Soar, Ideas Roar, and Creativity Finds Its Home. Join the Conversation!
                </p>
            </div>
            <div className="con-right">
                <img src={image2} alt="err"/>
            </div>
        </div>
        <div className=" article center max-width m-auto">
            <h2> ⯯ FEATURED ARTICLES ⯯</h2>
        </div>
    </div>
  )
}

export default LandingPage
