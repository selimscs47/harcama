import styles from './Navbar.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

export default function Navbar() {

    const {logout} = useLogout()
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='primary'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link component="button" to="/" className={styles.link}>Harcama Takip Uygualamsı </Link>
                </Typography>
                <Button variant='outlined' color="inherit">
                    <Link component='button' to="/login" className={styles.link}>GİRİŞ</Link>
                </Button>
                <Button variant='text' color="secondary">
                    <Link component='button' to="/signup" className={styles.link}>Üye Ol</Link>
                </Button>
                <Button variant='contained' onClick={logout} color="secondary" sx={{ml:5}}>
                Çıkış
                </Button>
            </Toolbar>
        </AppBar>
    </Box>

  )
}
