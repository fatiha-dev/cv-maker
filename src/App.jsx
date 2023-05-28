import './App.css';
import { Template } from './components/ResumeTemplate';
import { Personalinfos } from './components/Personalinfos';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import React from 'react';
export default function App(){
  const [infos, setInfos] = React.useState({})
  const [education, setEducation] = React.useState({})
  const [experience, setExperience] = React.useState({})
  const [skills, setSkills] = React.useState([]);
  const [skill, setSkill] = React.useState('');

function handleInfos(e){
    const {name, value} = e.target
    return(
        setInfos( prevInfo => {
          return {
            ...prevInfo,
            [name]: value,
          }
        })
    )
}
function handleEducation(e){
  const {name, value} = e.target
  return(
    setEducation( previous => {
      return {
        ...previous,
        [name]: value,
      }
    })
  )
}
function handleEexperience(e){
  const {name, value, type} = e.target
  return(
    setExperience( previous => {
      return {
        ...previous,
        [name]: type === 'checked' ? checked :value,
      }
    })
  )
}
function onAddSkill(){
  if (skill.trim() !== '') {
    setSkills((prevItems) => [...prevItems, skill]);
    setSkill('');
  }
}
function handleSkillChange(e){
  setSkill(e.target.value);
}
function handleSubmit(e){
  e.preventDefault()
}
return(
  <div className='app'>
    <form className="form flex" onSubmit={handleSubmit}>
         <Personalinfos onChange={handleInfos} />
         <Education onChange={handleEducation} />
         <Experience onChange={handleEexperience} />
         <Skills skill={skill} onChange={handleSkillChange} />
    </form>
    <Template infos={infos}
              education={education} 
              experience={experience}
              skills={skills}/>
  </div>
)
}
