export function Template({infos,education,experience, skills}){
    
    return(
        <div className="template">
            <div className="cv-section cv-header flex">
            <span className="FullName">
                {infos.firstName} {infos.lastName}
            </span>
            <span className="Job">{infos.job}</span>
            </div>
            <div className="cv-section">
                <h3 className="section--header">Contact</h3>
                <ul className="flex Contact" >
                    <li> {infos.adress} </li>
                    <li> {infos.email} </li>
                    <li> {infos.phoneNumber} </li>
                    <li> {infos.portfolio} </li>
                </ul> 
            </div>
            <div className="cv-section Education flex">
                <div>
                    <h3 className="section--header">Education</h3>
                </div>
                <div>
                    <p className="sec--uni"> {education.university} </p>
                    <p className="sec--degree"> {education.degree} </p>
                    <p className="sec--date"> from: {education.startDate} </p>
                    <p className="sec--date">to:  {education.endDate} </p>  
                </div>
                </div>
            <div className="cv-section Experience flex">
                <div>
                    <h3 className="section--header">Experience</h3>
                </div>
                <div>
                <p>{experience.post}
                    <p className="sec--employer"> {experience.employer} </p>
                    <p className="sec--date"> from: {experience.workStartAt} </p>
                    <p className="sec--date"> to: {experience.workEndAt} </p>
                </p>
                </div>
                <div>
                <p className="post-descripttion"> {experience.postDescription} </p>
                </div>  
            </div>
            <div className="cv-section">
                <div>
                    <h3 className="section--header">SKILLS</h3>
                </div>
                <ul>
                {skills.map((item ,index)=> {
                return <p key={index}>{item}</p>
                })}
                </ul>
                
            </div>
        </div>
    )
}