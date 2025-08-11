import { Game } from "../data/data"

export async function GET() {
  try {
    const response = await fetch('https://www.freetogame.com/api/games')
    
    if (!response.ok) {
      throw new Error('Erreur réseau')
    }
    
    const data: Game[] = await response.json()
    const first20Games = data.slice(0, 20)
    return Response.json(first20Games)
  } catch (error) {
    return Response.json({ error: 'Erreur lors de la récupération des données' }, { status: 500 })
  }
}