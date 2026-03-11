import ModernTemplate from "../templates/ModernTemplate"
import ClassicTemplate from "../templates/ClassicTemplate"
import PremiumTemplate from "../templates/PremiumTemplate"
import html2pdf from "html2pdf.js"

export default function ResumePreview({ resume, template }) {

const downloadPDF = () => {

const element = document.getElementById("resume-preview")

const opt = {
margin: 0.5,
filename: "resume.pdf",
image: { type: "jpeg", quality: 0.98 },
html2canvas: { 
scale: 2,
backgroundColor: null   // important for template background colors
},
jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
}

html2pdf().set(opt).from(element).save()

}

const renderTemplate = () => {

if (template === "Modern") {
return <ModernTemplate resume={resume} />
}

if (template === "Classic") {
return <ClassicTemplate resume={resume} />
}

if (template === "Premium Pro") {
return <PremiumTemplate resume={resume} />
}

return <ModernTemplate resume={resume} />

}

return (

<div style={{ padding: "40px" }}>

<div id="resume-preview">

{renderTemplate()}

</div>

<br />

<button
onClick={downloadPDF}
style={{
padding: "10px 20px",
background: "#2563eb",
color: "white",
border: "none",
borderRadius: "6px",
cursor: "pointer"
}}
>

Download Resume PDF

</button>

</div>

)

}