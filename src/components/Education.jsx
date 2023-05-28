export function Education({education, onChange}){
    
    return(
        <div className="section education flex" >
            <span className="headers flex">
            <h3 className="">Education</h3>                
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
                <div>
                <button className="icon add">Save</button>
                <button className="icon remove">Remove</button>
                </div>
            </div>
    )
}