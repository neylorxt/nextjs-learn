import { Game } from "../../data/data"
import { NextResponse } from 'next/server'


export async function GET() {
  try {
    const response = await fetch('https://www.freetogame.com/api/games', { cache: 'no-store' })


    if (!response.ok) {
      throw new Error('Erreur réseau')
    }
    
    const data: Game[] = await response.json();

    const first20Games = data.slice(0, 20)

    return new NextResponse(JSON.stringify(first20Games), { status: response.status })

  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Erreur lors de la récupération des données' }), { status: 500 })
  }
}