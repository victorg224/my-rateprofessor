import './Home.css'
import sxu2 from './assets/landscape2.jpeg'
import {Link} from 'react-router-dom'
import Signup from './Signup.jsx'
import CreateAcc from './CreateAcc.jsx'

function Home(){

   return(
<>
<div className = 'Ebackground'>
 
<img className='background' src= {sxu2}alt= "background"></img>
    <div className='Main'>
    
     <div className='header-container'>
     <h1 className="Header">Rate My Professor </h1>
        <ul className='Tabs'>
                                
               <li><Link to= '/'>Home</Link></li>
               <li><Link to= '/Majors'>Majors/Minors</Link></li>
               <li><Link to= '/AboutMe'>About Me</Link></li>         
      </ul>
      </div>
  



     </div>
     <div className='card'> 
     <img className='card-image' src= {sxu2}alt= "card-image"></img>
     <div className='text-overlay'>
        <h1 className='Welcome-text'>Welcome </h1>
        <p>to rate my professor Saint Xaiver ed. Looking for the professor that's that right fit for you? Search up professors and reviews from students here at Saint Xavier University!</p>
     </div>
     
     
     </div>
    
    <div>
      <Signup />
      <CreateAcc />

    </div>

     </div>
        
            
           
</>
   );

}
export default Home;