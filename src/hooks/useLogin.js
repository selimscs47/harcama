import {useState} from 'react'
import { auth } from '../firebase/config'

import {signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const    useLogin = () => {

    const {dispatch} = useAuthContext()

    const [hata, setHata] = useState(null)
    const [bekliyor, setBekliyor] = useState(false)
   
    const login=async(email, password)=>{
       
        setHata(null)
        setBekliyor(true)
     
            try {
             const res  = await signInWithEmailAndPassword(auth, email, password)
             console.log(res.user);  
             
             if(!res){
                    throw new  Error('Giriş işleninde hata oluştu')
             }
                dispatch({type:'LOGIN', payload:res.user})

             setBekliyor(false)
             setHata(null)

            } catch (error) {
                console.log(error.message);
                setHata(error.message)
                setBekliyor(false)
            }
        }
        return {login, hata, bekliyor}
    }

