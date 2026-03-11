import { supabase } from "../supabaseClient"

export default function CreateResume({ resume, setResume }) {

const updateField = (field, value) => {
setResume({
...resume,
[field]: value
})
}

// AI SUMMARY GENERATOR
const generateAISummary = () => {

if (!resume.name) {
alert("Enter name first")
return
}

const summaries = [

`${resume.name} is a motivated professional with strong problem-solving skills and a passion for building efficient solutions.`,

`${resume.name} is a dedicated software developer experienced in building scalable applications and solving complex technical challenges.`,

`${resume.name} is a results-driven professional who enjoys turning ideas into real-world digital products.`,

`${resume.name} is a passionate developer focused on creating efficient and user-friendly software solutions.`

]

const randomSummary = summaries[Math.floor(Math.random() * summaries.length)]

updateField("summary", randomSummary)

}

// SAVE TO SUPABASE
const saveResume = async () => {

const { error } = await supabase
.from("resumes")
.insert([resume])

if (error) {
alert(error.message)
} else {
alert("Resume saved successfully")
}

}

return (

<div style={{ width: "350px", padding:"20px" }}>

<h2>Create Resume</h2>

<input
placeholder="Name"
value={resume.name || ""}
onChange={(e) => updateField("name", e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
value={resume.email || ""}
onChange={(e) => updateField("email", e.target.value)}
/>

<br/><br/>

<input
placeholder="Phone"
value={resume.phone || ""}
onChange={(e) => updateField("phone", e.target.value)}
/>

<br/><br/>

<textarea
placeholder="Summary"
value={resume.summary || ""}
onChange={(e) => updateField("summary", e.target.value)}
/>

<br/><br/>

<button onClick={generateAISummary}>
Generate Smart Summary
</button>

<br/><br/>

<button onClick={saveResume}>
Save Resume
</button>

</div>

)

}