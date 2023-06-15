import {Container,Grid,} from '@mui/material'
import Form from './Form'
import Liste from './Liste'
import './Home.module.css'

import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

export default function Home() {

  const {user} = useAuthContext();
  const {belgeler,hata} = useCollection("harcamalar",["uid","==",user.uid],["olusturulmaTarihi","desc"]);

 return (
 
  <Container sx={{mt:8}}>
    <Grid container spacing={15}>
      <Grid item md={8} xs={12} sm={12}>
        {hata && <p>{hata}</p>}
          {
            belgeler && <Liste harcamalar = {belgeler} />
          }
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
        <Form uid={user.uid} />
        </Grid>
    </Grid>
  </Container>



  )
}

