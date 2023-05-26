import './App.css';
import { Template } from './components/ResumeTemplate';
import { Personalinfos } from './components/Personalinfos';
import { Education } from './components/Education';
import React from 'react';
export default function App(){
  const [infos, setInfos] = React.useState({})
  const [education, setEducation] = React.useState({})
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
  const {name, value, type} = e.target
  return(
    setEducation( previous => {
      return {
        ...previous,
        [name]: value,
      }
    })
  )
}
function handleSubmit(e){
  e.preventDefault()
}
return(
  <div className='app'>
    <form className="form flex" onSubmit={handleSubmit}>
         <Personalinfos onChange={handleInfos} />
         <Education onChange={handleEducation} />
    </form>
    <Template infos={infos} education={education}/>
  </div>
)
}
