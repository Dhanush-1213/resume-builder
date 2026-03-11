export default function ModernTemplate({resume}){

return(

<div style={{
width:"700px",
margin:"auto",
padding:"40px",
fontFamily:"Arial",
background:"#f3f4f6",
color:"#111",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
}}>

<h1 style={{
color:"#2563eb",
fontSize:"32px"
}}>
{resume.name}
</h1>

<p>{resume.email} | {resume.phone}</p>

<hr/>

<h3>Professional Summary</h3>

<p>{resume.summary}</p>

</div>

)

}