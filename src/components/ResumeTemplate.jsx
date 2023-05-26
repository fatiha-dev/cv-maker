import React from "react"
export function Template({infos,education}){
    return(
        <div className="template">
            <div className="cv-section cv-header flex">
            <span className="FullName">
                {infos.firstName} {infos.lastName}
            </span>
            <spnan className="Job">{infos.job}</spnan>
            </div>
            <div className="cv-section">
                <ul className="flex Contact" >
                    <li> {infos.adress} </li>
                    <li> {infos.email} </li>
                    <li> {infos.phoneNumber} </li>
                    <li> {infos.portfolio} </li>
                </ul> 
            </div>
            <div className="cv-section Education">
                <p> {education.degree} </p>
                <p> {education.university} </p>
                <p> {education.startDate} </p>
                <p> {education.endDate} </p>
            </div>
        </div>
    )
}