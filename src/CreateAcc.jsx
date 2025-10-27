import './CreateAcc.css'

function CreateAcc(){
return(
    /*C- means create account function */
    <div className="CreateAcc">
    <form>
      <h1 className = "CreateAcc-text">Create an account here</h1>
      <div className='FirstName'>
      <label className = "First-name">First Name: </label>
      <input className= "Cinput-1" type = "text"></input>
      </div>
      
      <div className='LastName'>
      <label className = "Last-name">Last Name: </label>
      <input className= "Cinput-2" type = "text"></input>
      </div>
      
      <div className='Email'>
      <label className = "Email1">Email: </label>
      <input className= "Cinput-3" type = "text"></input>

      </div>
     
       <button className='create-button'>create</button>
    </form>
</div>
);





}

export default CreateAcc;