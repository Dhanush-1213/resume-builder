export default function PremiumTemplate({resume}){

return(

<div style={{
width:"700px",
margin:"auto",
padding:"40px",
fontFamily:"Helvetica",
background:"#1f2937",
color:"white",
borderRadius:"10px"
}}>

<h1 style={{
color:"#22c55e",
fontSize:"32px"
}}>
{resume.name}
</h1>

<p>{resume.email}</p>
<p>{resume.phone}</p>

<hr style={{borderColor:"#4b5563"}}/>

<h3>Profile</h3>

<p>{resume.summary}</p>

</div>

)

}