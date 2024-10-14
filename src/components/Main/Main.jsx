import { assets } from '../../assets/assets'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p className='hello'><span>Hello, User</span></p>
                <p>How can I help?</p>
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a promt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
        </div>
    </div>
  )
}

export default Main