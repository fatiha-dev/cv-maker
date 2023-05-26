export function Education({education, onChange}){
    
    return(
        <div className="section education flex" >
            <span>
            <h3 className="headers">Education</h3>                
            <button className="icon">Add</button>
            <button className="icon">Remove</button>
            </span>   
                <input className="form-input"
                        type="text"
                        name="degree"
                        
                        placeholder="dgree"
                        onChange={onChange} 
                />
                <input className="form-input"
                        type="text"
                        name="university"
                        
                        placeholder="university name"
                        onChange={onChange} 
                />
                <fieldset className="section duration">
                    <label htmlFor="startDate"/>Start date
                    <input className="form-input input--date"
                            type="date"
                            name="startDate"
                            
                            id="startDate"
                            onChange={onChange} 
                    /> 
                    <label htmlFor="endDate"/>End date
                    <input className="form-input input--date"
                            type="date"
                            name="endDate"
                            
                            id="endDate"
                            onChange={onChange} 
                    />  
                </fieldset>
            </div>
    )
}