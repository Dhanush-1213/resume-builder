export default function ClassicTemplate({resume}){

return(

<div style={{
width:"700px",
margin:"auto",
padding:"40px",
fontFamily:"Times New Roman",
background:"#ffffff",
color:"#111",
border:"3px solid black"
}}>

<h1 style={{
fontSize:"30px"
}}>
{resume.name}
</h1>

<p>Email: {resume.email}</p>

<p>Phone: {resume.phone}</p>

<hr/>

<h3>Professional Summary</h3>

<p>{resume.summary}</p>

</div>

)

}