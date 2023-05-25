export function Experience(){
    function handleChange(){
        return(
            console.log("changed")
        )
    }
    return(
    <div className="section experience flex">
                <h3>Experience</h3>
                <input className="form-input"
                        type="text"
                        name="companyName"
                        value=""
                        placeholder="company name"

                        onChange={handleChange} 
                />
                <input className="form-input"
                        type="text"
                        name="podtDescription"
                        value=""
                        placeholder="Pst description"
                        onChange={handleChange} 
                />
                <fieldset className="section duration">
                    <label>Starting date</label>
                    <input className="form-input input-date"
                            type="date"
                            name="workStartAt"
                            value=""
                            id="workStartAt"
                            onChange={handleChange} 
                    />
                    <label>Ending date</label>
                    <input className="form-input input-date"
                            type="date"
                            name="workEndtA"
                            value=""
                            id="workStartAt"

                            onChange={handleChange} 
                    />
                </fieldset>
            </div>
    )
}