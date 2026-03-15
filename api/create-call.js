export default async function handler(req, res) {

  const response = await fetch("https://api.retellai.com/create-web-call", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RETELL_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      agent_id: "agent_e1a35746de05b975057bb44284"
    })
  });

  const data = await response.json();

  res.status(200).json(data);
}
