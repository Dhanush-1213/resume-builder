const express = require("express")
const cors = require("cors")
const OpenAI = require("openai")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

app.get("/", (req, res) => {
  res.send("AI Resume Builder API running")
})

app.post("/ai-summary", async (req, res) => {

  try {

    const { name, role } = req.body

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Write a professional resume summary for ${name} who works as a ${role}. Keep it under 3 sentences.`
        }
      ]
    })

    res.json({
      summary: completion.choices[0].message.content
    })

  } catch (error) {

    console.log(error)
    res.status(500).json({ error: "AI generation failed" })

  }

})

app.listen(5000, () => {
  console.log("AI Server running on port 5000")
})