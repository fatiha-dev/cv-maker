export function Skills({onChange, onAddSkill}){
    
    return(
        
        <div className="section skills">
            <h3 className="headers">Skills</h3>
            <input className="form-input"
                    type="text"
                    placeholder="add skills"
                    onChange={onChange}
            />
            <div>
            <button className="icon" onClick={onAddSkill}>Add skill</button>
            </div>
        </div>
    )
}