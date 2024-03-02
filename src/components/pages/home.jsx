import Navbar from '../Navbar';
// import Footer from '../Footer';
import ProfilePic from '../../assets/portfolioimg1.jpg'
import './home.css'

export default function Home() {
    return <div className='page' id='home'>Home
        <h1>Welcome to Kenya's Portfolio</h1>
        <img src={ProfilePic} alt='my profile picture' className='profile-image profile-image-home' />
        </div>
        
    
}