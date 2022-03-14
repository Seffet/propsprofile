import React from 'react'
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div style={{background:"violet"}}>
        
      <h2 style={{color:"red" }} >{props.name} </h2>
      <p style={{color:"white"}}>{props.age}</p>
      <h3 style={{color:"tomato"}}>{props.bio}</h3>
      <h4 style={{color:"#ff69a9"}}>{props.profession}</h4>
      {props.children}
      <button onClick={props.handleName}>click here</button>
    </div>
  )
}

Profile.defaultProps = {
  name:"Skander",
  age:"twenty three",
  bio:"the bio section",
  profession:"profession section"
}
Profile.propTypes = {
  name : PropTypes.string,
  age: PropTypes.number,
  bio:PropTypes.string,
  profession:PropTypes.string,
}

export default Profile
