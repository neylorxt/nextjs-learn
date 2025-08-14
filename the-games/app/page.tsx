"use client"

import { Flex, ScrollArea, Text } from "@mantine/core";

import Header from "./_components/Header";
import MyCarousel from "./_components/Carousel";
import CardComponent from "./_components/Card";
import { useEffect, useState } from "react";
import { Game } from "./data/data";
import Footer from "./_components/Footer";

export default function HomePage() {
  const [data, setData] = useState<Game[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/games');

        if (!response.ok) {
          throw new Error('Erreur réseau')
        }
        const result = await response.json()

        setData(result)

      } catch (err) {
        setError('Une erreur est survenue')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) { return <div>Chargement...</div> }
  if (error) { return <div>Erreur: {error}</div> }
  if (!data) { return <div>Aucune donnée disponible</div> }
  if (data.length === 0) { return <div>Aucun jeu trouvé</div> }

  return (
    <>
      <Header />

      <MyCarousel />

      <Text fw="700" size="xl" ta="center" pt={10}>Recommended Games</Text>
      <Flex
        mih={500}
        gap="lg"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        {data.slice((data.length - 3), data.length).map((game, index) => (
          <CardComponent key={index} game={game} />
        ))}

      </Flex>

      <ScrollArea h={900} pt={10} pb={10}>
        <Text fw="700" size="xl" ta="center" pb={10}>All Game</Text>

        <Flex
          gap="lg"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {data.map((game, index) => (
            <CardComponent key={index} game={game} />
          ))}

        </Flex>
      </ScrollArea>

      <Footer />

    </>
  );
}
