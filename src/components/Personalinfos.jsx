import React from "react"
export function Personalinfos({infos, onChange}){
    return(
            <div className="section generalInfos flex">
                <div>
                <h3 className="headers">General informations</h3>

                </div>
                <input className="form-input"
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        onChange={onChange} 
                />
                <input className="form-input"
                type="text"
                name="lastName"
                value={infos}
                placeholder="Last name"
                onChange={onChange} 
                />
                <input className="form-input"
                type="text"
                name="adress"
                value={infos}                        
                placeholder="adress "
                onChange={onChange} 
                />
                <input className="form-input"
                type="email"
                name="email"
                value={infos}                       
                placeholder="email"
                onChange={onChange} 
                />
                <input className="form-input"
                type="text"
                name="phoneNumber"
                value={infos}
                placeholder="phone number"
                onChange={onChange} 
                />
                <input className="form-input"
                type="text"
                name="job" 
                value={infos}                     
                placeholder="add job title"
                onChange={onChange}/> 
                <input className="form-input"
                type="text"
                name="portfolio" 
                value={infos}                     
                placeholder="add portfolio or social media link"
                onChange={onChange}/> 
                
            </div>   
    )
}

