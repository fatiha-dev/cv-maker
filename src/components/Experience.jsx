export function Experience({onChange, toPresent}){
    return(
    <div className="section experience flex">
                <h3 className="headers">Experience</h3>
                <input className="form-input"
                        type="text"
                        name="employer"
                        placeholder="employer"
                        onChange={onChange} 
                />
                <input className="form-input"
                        type="text"
                        name="post"
                        placeholder="your job title"
                        onChange={onChange} 
                />
                <textarea className="form-input"
                        type="text"
                        name="postDescription" 
                        placeholder="What did you acieve ?"
                        onChange={onChange} 
                />
                <fieldset className="section duration">
                    <label className="headers">Starting date</label>
                    <input className="form-input input--date"
                            type="date"
                            name="workStartAt"   
                            id="workStartAt"
                            onChange={onChange} 
                    />
                    <label className="headers">Ending date</label>
                    <input className="form-input input--date"
                            type="date"
                            name="workEndAt"
                            id="workEndAt"
                            onChange={onChange} 
                    />
                </fieldset>
            </div>
    )
}