import React from 'react'
import './updateprofile.css'
import image from '../../assets/login.png'



const Updateprofile = () => {
  return (
    <div className="rb__updateprofile">
      <div className="rb__updateprofile-bio">
        <img src={image} />
        <div className="rb__updateprofile-bio_container">
          <h3>User</h3>
          <h4>Company Name</h4>
         
          <form action="/action_page.php">
            <input type="file" id="myFile" name="filename" />
            <input type="submit" id='submit' />
          </form>
        </div>
      </div>
      <div className='rb__updateprofile-container'>
          <h4>Full Name</h4>
          <input type='text' placeholder='Name' />
          <h4>Company Name</h4>
          <input type='text' placeholder='Name' />
          <h4>Email</h4>
          <input type='text' placeholder='Name' />
          <h4>Contact No</h4>
          <input type='text' placeholder='Name' />
          <h4>Address</h4>
          <input type='text' placeholder='Name' />
          <h4>Profile Type</h4>
          <input type='text' placeholder='Name' />
          <h4>City</h4>
          <input type='text' placeholder='Name' />
          <h4>State</h4>
          <input type='text' placeholder='Name' />
          <h4>Country</h4>
          <input type='text' placeholder='Name' />
      </div>
      <button>Upload</button>
    </div>
  )
}

export default Updateprofile