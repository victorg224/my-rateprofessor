import './Signup.css'
import {useState} from 'react';
import { supabase } from './supabaseClient.js';

function Signup(){

  const [formData, setFormData] = useState ({
    name: '',
    major: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({... prev, [e.target.name]: e.target.value}));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {error} = await supabase
     .from('professors')
      .insert([formData]);
      if(error){
        alert('Error inserting professor')
        console.error(error);
      }else{
        alert('Prof added')
      }
    
  };
return(
<div className="Signup">
    <form onSubmit={handleSubmit}>
      <h1 className = "signup-text">Can't find your professor?</h1>
      <div className='p'>
      <label className = "Professor-name">Professor Name: </label>
      <input name ="name" onChange={handleChange}  value= {formData.name} className= "input-1" type = "text"></input>
      </div>
      
      <div className='m'>
      <label className = "Major-name">Major: </label>
      <input name = "major" onChange={handleChange}  value= {formData.major} className= "input-2" type = "text"></input>
      </div>
      
      <div className='c'>
      <label className = "Course-name">Course Name: </label>
      <input name = "course" onChange={handleChange} value= {formData.course} className= "input-3" type = "text"></input>

      </div>
     
       <button className='signup-button'>Submit</button>
    </form>
</div>
);

}
export default Signup;