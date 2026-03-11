import { useState } from "react"
import "./Templates.css"

export default function Templates({ setTemplate }) {

const [selectedTemplate, setSelectedTemplate] = useState(null)
const [isPremium, setIsPremium] = useState(false)

const templates = [
{ id:1, name:"Modern", type:"free" },
{ id:2, name:"Classic", type:"free" },
{ id:3, name:"Premium Pro", type:"paid" }
]

const selectTemplate = (template) => {

if(template.type === "paid" && !isPremium){
alert("This is a premium template. Please upgrade to use it.")
return
}

setSelectedTemplate(template.name)

if(setTemplate){
setTemplate(template.name)
}

}

const upgrade = () => {
setIsPremium(true)
alert("Premium unlocked! You can now use paid templates.")
}

return (

<div className="templates-container">

<h2 className="templates-title">Choose Resume Template</h2>

<button className="upgrade-btn" onClick={upgrade}>
Upgrade to Premium
</button>

<div className="templates-grid">

{templates.map((template)=>(
<div
key={template.id}
className={`template-card ${template.type==="paid" ? "paid":""}`}
>

<h3 className="template-name">{template.name}</h3>

<p className="template-type">
{template.type==="free" ? "Free Template":"Premium Template"}
</p>

<button
className="template-btn"
onClick={()=>selectTemplate(template)}
>
Select Template
</button>

</div>
))}

</div>

{/* Selected Template Display */}

{selectedTemplate && (
<div
style={{
marginTop:"25px",
padding:"15px",
background:"#1b9280",
borderRadius:"8px",
fontWeight:"600"
}}
>
Selected Template: {selectedTemplate}
</div>
)}

</div>

)

}