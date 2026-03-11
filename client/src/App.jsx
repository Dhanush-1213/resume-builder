import { useState } from "react"
import Templates from "./pages/Templates"
import CreateResume from "./pages/CreateResume"
import ResumePreview from "./pages/ResumePreview"

function App(){

const [template,setTemplate] = useState("Modern")

const [resume,setResume] = useState({
name:"",
email:"",
phone:"",
summary:""
})

return(

<div style={{padding:"30px"}}>

<Templates setTemplate={setTemplate}/>

<div style={{
display:"flex",
gap:"40px",
marginTop:"30px"
}}>

<CreateResume
resume={resume}
setResume={setResume}
/>

<ResumePreview
resume={resume}
template={template}
/>

</div>

</div>

)

}

export default App