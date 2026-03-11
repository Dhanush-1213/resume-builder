import axios from "axios"

const API = "http://localhost:5000"

/* Generate Resume Summary */

export const generateSummary = async (name, role) => {

  try {

    const response = await axios.post(`${API}/ai-summary`, {
      name: name,
      role: role
    })

    return response.data.summary

  } catch (error) {

    console.error("AI Error:", error)
    return "AI could not generate summary."

  }

}