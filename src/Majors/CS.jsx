import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {supabase} from '../supabaseClient';
import './CS.css' ;

const CS_MAJOR_ID = 'c275c286-eee1-4ae4-8cac-111b93eaa06c';

function CS(){
  
  //empty array of courses that update with setCourses
  const [courses, setCourses] = useState([]);
  //tracks whether data is still loading 'true' means where fecthing data
  const[loading,setLoading] = useState(true);

  useEffect(() => {
    ( async() => {
      const{data,error} = await supabase
      .from('courses')
      .select('id, code, title')
      .eq('major_id', CS_MAJOR_ID)
      .order('code', {ascending: true})
      if(error) console.log(error)
        setCourses(data || [])
      setLoading(false)
    })()
  }, [])
  if (loading) return <p>Loading...</p>

    return(
  <>
   <div className='A-Main'>
    
    <div className='header-container'>
    <h1 className="Header">Computer Science Department </h1>
       <ul className='Tabs'>                        
              <li><Link to= '/'>Home</Link></li>
              <li><Link to= '/Majors'>Majors/Minors</Link></li>
              <li><Link to= '/AboutMe'>About Me</Link></li>         
     </ul>
     </div>
    
    </div>
    <main>
<ul className="grid">
        {courses.map(c=>(
          <li key={c.id} >
            <h3>{c.code} - {c.title}</h3>
            <Link to={`/courses/${c.id}`}>View Professors</Link>

          </li>
        ))} 
        
      </ul>



    </main>
    <div className='CSProfessors'>
      
      
     

    </div>
  
  
  </>
    );

}

export default CS;