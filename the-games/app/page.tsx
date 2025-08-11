"use client"

import { Flex, ScrollArea, Text } from "@mantine/core";

import Header from "./_components/Header";
import MyCarousel from "./_components/Carousel";
import CardComponent from "./_components/Card";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/')

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

  console.log(data)


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
        <CardComponent />
        <CardComponent />
        <CardComponent />

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
          <CardComponent />
          <CardComponent />
          <CardComponent />

          <CardComponent />
          <CardComponent />
          <CardComponent />

          <CardComponent />
          <CardComponent />
          <CardComponent />

          <CardComponent />
          <CardComponent />
          <CardComponent />

        </Flex>
      </ScrollArea>

    </>
  );
}
