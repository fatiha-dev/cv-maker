export function Education(){
    function handleChange(){
        return(
            console.log("changed")
        )
    }
    return(
        <div className="section education flex" >
                <h3>Education</h3>
                <input className="form-input"
                        type="text"
                        name="degree"
                        value=""
                        placeholder="dgree"
                        onChange={handleChange} 
                />
                <input className="form-input"
                        type="text"
                        name="university"
                        value=""
                        placeholder="university name"
                        onChange={handleChange} 
                />
                <fieldset className="section duration">
                    <label htmlFor="startDate"/>Start date
                    <input className="form-input input--date"
                            type="date"
                            name="startDate"
                            value=""
                            id="startDate"
                            onChange={handleChange} 
                    /> 
                    <label htmlFor="endDate"/>End date
                    <input className="form-input input--date"
                            type="date"
                            name="endDate"
                            value=""
                            id="endDate"
                            onChange={handleChange} 
                    />  
                </fieldset>
            </div>
    )
}