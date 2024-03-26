import { useEffect, useState,  } from 'react'

import { useRouter } from "next/router"

import { getAgency } from '@utils/api/agencies'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavBar from '@components/NavBar';

import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2



export default function Agency() {
  // make stateful value.
  const [agencyData, setAgencyData] = useState()

  const router = useRouter()
  const {agencyId} = router.query

  useEffect(()=> {
    // if the router.query is empty i don't execute the rest.
    if (!agencyId) {
      return // don't execute the rest of the function
    }
    // get agency data from the backend
    loadAgency()
  }, [agencyId])

  const loadAgency = async () => {
    // get from backend
    const agencyData = await getAgency(agencyId)
    // update frontend
    setAgencyData(agencyData)
  }


  // display the name
  
  // handle the empty case
  if (!agencyData) {
    return <>
      Loading...
    </>
  }



  return<>
   <Container>
    <Grid container spacing={2}>
      <Grid item spacing={2}>
  <img 
  src={agencyData.logo_url}
  alt=''
  />
      </Grid>
    <Grid item  xs={10}>
      <Typography variant="h3">
    Agency: {agencyData.name}
    </Typography>
    </Grid>
    </Grid>
  </Container>
  </>
}
