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
    </div>
  )
}

export default Main