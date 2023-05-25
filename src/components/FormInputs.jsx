import { Education } from "./Education"
import { Experience } from "./Experience"
import { Personalinfos } from "./Personalinfos"
import { Skills } from "./Skills"
export function FormInputs(){
    
    return(
        <form className="form flex">
             <Personalinfos />
             <Education />
             <Experience />
             <Skills />
        </form>
    )
}