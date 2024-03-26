import {useState, useEffect} from 'react'

import Head from 'next/head'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import AgencyCard from '@components/AgencyCard';
import NavBar from '@components/NavBar';

import { getAgencies } from '@utils/api/agencies';

export default function Home() {
  // make a stateful value.
  const [agenciesData, setAgenciesData] = useState()
  // on page mount get the agency data

  useEffect(()=> {
    loadAgencies()
  }, [])

  const loadAgencies = async () => {
    // get it from the backend.
    const fetchedData = await getAgencies()
    console.log(fetchedData)
    // load it on the frontend.
    setAgenciesData(fetchedData)
  }
  // display it in the jsx.
  
  // handle the empty case
  if (!agenciesData) {
    return <div>
      <NavBar />
      <h5>Loading...</h5>
    </div>
  }
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar />

        <Container sx={{paddingTop:2}} component="main" maxWidth="xs">

          <Typography variant="h3">
            Space Agencies
          </Typography>
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          </Box>
          <>
          { agenciesData.results.map((agency)=> {
            return <AgencyCard
              key={agency.id}
              id={agency.id}
              imageUrl={agency.image_url}
              name={agency.name}
              abbreviation={agency.abbrev}
              description={agency.description}
            />
          })}
          </>
          
        </Container>

    </div>
  )
}
