//rafce default arrow function
//const User = (props) => {
//    return (
//        <div>
//            <h1>I am {props.name} from {props.departmant}</h1>
//        </div>
//    )
//}
import React from 'react'

const User = ({ name, department, skill, hobby,education}) => {
  return (
    <div>
      <h1>Hi, I am {name}</h1>
      <p>I am a {department} student from Sri Shakthi Institute of Engineering and Technology, aspiring to become a Full Stack Developer.</p>
      <h3>SKILLS:</h3>
      <ol>
        {skill.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ol>
      <h3>HOBBIES:</h3>
      <ol>
        {hobby.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ol>
      <h3>EDUCATION:</h3>
      <ol>
        {education.map((item, id)=> (
          <li key={id}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default User
