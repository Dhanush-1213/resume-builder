import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

export default function ResumeList(){

const [resumes,setResumes] = useState([])
const [editingId,setEditingId] = useState(null)
const [summary,setSummary] = useState("")

useEffect(()=>{
fetchResumes()
},[])

const fetchResumes = async () => {

const { data, error } = await supabase
.from("resumes")
.select("*")
.order("created_at",{ascending:false})

if(error){
console.log(error)
}else{
setResumes(data)
}

}

const deleteResume = async (id) => {

await supabase
.from("resumes")
.delete()
.eq("id",id)

fetchResumes()

}

const startEdit = (resume)=>{
setEditingId(resume.id)
setSummary(resume.summary)
}

const updateResume = async (id)=>{

await supabase
.from("resumes")
.update({summary:summary})
.eq("id",id)

setEditingId(null)

fetchResumes()

}

return(

<div style={{padding:"40px"}}>

<h2>Saved Resumes</h2>

{resumes.map((resume)=>(

<div key={resume.id}
style={{
border:"1px solid gray",
padding:"20px",
marginBottom:"15px"
}}>

<h3>{resume.name}</h3>

<p>{resume.email}</p>

<p>{resume.phone}</p>

{editingId === resume.id ? (

<div>

<textarea
value={summary}
onChange={(e)=>setSummary(e.target.value)}
/>

<br/><br/>

<button onClick={()=>updateResume(resume.id)}>
Save
</button>

</div>

) : (

<p>{resume.summary}</p>

)}

<br/>

<button onClick={()=>startEdit(resume)}>
Edit
</button>

<button
onClick={()=>deleteResume(resume.id)}
style={{marginLeft:"10px"}}
>
Delete
</button>

</div>

))}

</div>

)

}