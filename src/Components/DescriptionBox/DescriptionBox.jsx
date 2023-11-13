import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='discriptionbox'>
      <div className="discriptionbox-navigator">
        <div className="descriptionbox-navbox">
            Description
        </div>
        <div className="descriptionbox-navbox fade">
           Reviews (122)
        </div>
        <div className="descriptionbox-description">
            <p>Small, neat and easy to install, this 2K Rear Cam captures everything. The custom-trained AI monitors the world behind you and sends instant alerts. Plus, it works with every iQ model and delivers crystal clear recordings, day or night.</p>
           <p>Stay distraction-free while driving. The iQ responds to your voice so you can record, pause, save footage or activate Witness Mode without taking your hands off the wheel. All you need to do is talk.</p>
        </div>
      </div>
    </div>
  )
}

export default DescriptionBox
