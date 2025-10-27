import './AboutMe.css'
import ProfilePic from './assets/Profile.jpg'
import {Link} from 'react-router-dom'
function AboutMe(){
return(
    <>
     <div className='A-Main'>
    
    <div className='header-container'>
    <h1 className="Header">Rate My Professor </h1>
       <ul className='Tabs'>                        
              <li><Link to= '/'>Home</Link></li>
              <li><Link to= '/Majors'>Majors/Minors</Link></li>
              <li><Link to= '/AboutMe'>About Me</Link></li>         
     </ul>
     </div>
    
    </div>

    <div className='about-me-content'>
          <img className= 'Card-image' src={ProfilePic} alt="Profile" />
          <p className = 'paragraph'>Hello everyone, my name is Victor Gandara. I am a student here at Saint Xavier University studying Computer science.
           During my years here I 
           noticed that teachers on rate my professor aren't always up to date or they might not be listed at all. So i have created 
           this website in order to give students the abilty to write reviews, see the most up to date reviews, and have a wider variety
           of professor reviews so that you can pick the professor that best fits you. 
          </p>
        </div>

   
    
    
    </>
   
);


}
export default AboutMe;