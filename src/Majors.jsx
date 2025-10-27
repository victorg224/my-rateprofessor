import {Link} from 'react-router-dom'
import './Majors.css'
function Majors(){
    return(
        <>
        <div className='M-Main'>
    
     <div className='header-container'>
     <h1 className="Header">Rate My Professor </h1>
        <ul className='Tabs'>
                                
               <li><Link to= '/'>Home</Link></li>
               <li><Link to= '/Majors'>Majors/Minors</Link></li>
               <li><Link to= '/AboutMe'>About Me</Link></li>         
      </ul>
      </div>
     </div>

     <div className= 'Majors'>

        <div className = 'Majors1'>
        <ul>
            <h1 className = 'HeaderA'>A</h1>
            <li><Link to='/Accounting'>Accounting</Link></li>
            <li>Art</li>
            <h1 className = 'HeaderA'>B</h1>
            <li><Link to='/Bio'>Biology</Link></li>
            <li>Business Administration</li>
            <h1 className = 'HeaderA'>C</h1>
            <li>Chemistry</li>
            <li>Communication</li>
            <li>Computer Information Systems</li>
            <li><Link to= '/CS'>Computer Science</Link> </li>
            <li>Criminal Justice</li>
            <li>CyberSecurity-CIS</li>
            <li>CyberSecurity-CS</li>
            <h1 className = 'HeaderA'>D</h1>
            <li>Digital Marketing</li> 
            
        </ul>
        </div>
     
      <div className='Majors2'>
          <ul>
          <h1 className = 'HeaderA'>F</h1>
            <li>Finance</li>
            <li>Family Nurse</li>
          <h1 className = 'HeaderA'>G</h1>
            <li>Game Design and Motion Graphics</li>
            <li>Game Development</li>
            <li>Graphic Design</li>
            <h1 className = 'HeaderA'>H</h1>
            <li>HealthCare Administion</li>
            <li>HealthCare Managment</li>
            <li>Hospitality Managment</li>
            <li>Human Resource Mangment</li>
            <h1 className = 'HeaderA'>M</h1>
            <li>Managment</li>
            <li>Mathematics</li>
            <li>Media Communication</li>
            <li></li>
          </ul>
        </div>

        <div className='Majors3'>
          <ul>
          <h1 className = 'HeaderA'>N</h1>
            <li>Natural Science</li>
            <li>Nurse Educator</li>
            <li>Nursing Pre-Licensure</li>
            <h1 className = 'HeaderA'>P</h1>
            <li>Political Science</li>
            <li>Pre-Chiropractic</li>
            <li>Pre-Dentistry</li>
            <li>Pre-Law</li>
            <h1 className = 'HeaderA'>S</h1>
            <li>Sports and Fitness Administation</li>
            <li>Sports Communication</li>
            <li>Strength and Conditioning</li>
            <li>Supply Chain Managment</li>
            <h1 className = 'HeaderA'>W</h1>
            <li>Web Design-CIS</li>
            <li>Web Design-CS</li>
          </ul>
        </div>

        </div>

  

     

     </>
    );
    
}
export default Majors;