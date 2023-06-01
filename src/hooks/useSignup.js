import {useState} from 'react'
import { auth } from '../firebase/config'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const    useSignup = () => {

    const {dispatch} = useAuthContext()

    const [hata, setHata] = useState(null)
    const [bekliyor, setBekliyor] = useState(false)
   
    const signup=async(email, password, displayName)=>{
       
        setHata(null)
        setBekliyor(true)
     
            try {
             const res  = await createUserWithEmailAndPassword(auth, email, password)
             console.log(res.user);  
             
             if(!res){
                    throw new  Error('Üye olma işleninde hata oluştu')
             }
             await updateProfile (res.user, {displayName})
                dispatch({type:'LOGIN', payload:res.user})

             setBekliyor(false)
             setHata(null)

            } catch (error) {
                console.log(error.message);
                setHata(error.message)
                setBekliyor(false)
            }
        }
        return {signup, hata, bekliyor}
    }

