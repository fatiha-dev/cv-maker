export function Personalinfos(){
    function handleChange(){
        return(
            console.log("changed")
        )
    }
    return(
        <div className="container">
            <div className="section generalInfos flex">
                <span>
                <h3>Personal informations</h3>
                <button className="icon-add">Add</button>
                <button className="icon-remove">Remove</button>
                </span>
                <input className="form-input"
                        type="text"
                        name="firstName"
                        value=""
                        placeholder="First name"

                        onChange={handleChange} 
                />
                <input className="form-input"
                        type="text"
                        name="lastName"
                        value=""
                        placeholder="Last name"
                        onChange={handleChange} 
                />
                <input className="form-input"
                        type="text"
                        name="adress"
                        value=""
                        placeholder="adress "
                        onChange={handleChange} 
                />
                <input className="form-input"
                        type="email"
                        name="email"
                        value=""
                        placeholder="email"
                        onChange={handleChange} 
                />
                <input className="form-input"
                        type="text"
                        name="phoneNumber"
                        value=""
                        placeholder="phone number"
                        onChange={handleChange} 
                />
                <textarea className="form-area" placeholder="add description"/>
            </div>
        </div>
    )
}