import './Sidebar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'

const Sidebar = () => {
    const [isExtended, setIsExtended] = useState(false)

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setIsExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {isExtended ? <p>New Chat</p> : null}
                </div>
                {isExtended ? (
                    <div className="recent">
                       <p className="recent-title">Recent</p>
                       <div className="recent-entry">
                           <img src={assets.message_icon} alt="" />
                           <p>What is React ...</p>
                       </div>
                   </div>
                ) : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {isExtended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {isExtended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {isExtended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar