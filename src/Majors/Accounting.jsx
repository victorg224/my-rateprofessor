import {Link} from 'react-router-dom';
import './Accounting.css'

function Accounting(){
return(
<div className='A-Main'>
    
    <div className='header-container'>
    <h1 className="Header">Accounting Department </h1>
       <ul className='Tabs'>                        
              <li><Link to= '/'>Home</Link></li>
              <li><Link to= '/Majors'>Majors/Minors</Link></li>
              <li><Link to= '/AboutMe'>About Me</Link></li>         
     </ul>
     </div>
    
    </div>


);


};
export default Accounting;