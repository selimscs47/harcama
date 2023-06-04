import {Container,Grid,Paper} from '@mui/material'
import Form from './Form'
import './Home.module.css'

export default function Home() {
 return (
 
  <Container sx={{mt:8}}>
    <Grid container spacing={2}>
      <Grid item md={8} xs={12} sm={12}>
        <Paper>Liste</Paper>
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
        <Form/>
        </Grid>
    </Grid>
  </Container>



  )
}

