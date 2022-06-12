import React, {useState } from 'react'
import {TextField, Button} from '@mui/material'
import { useNavigate } from "react-router-dom";
import { checkProvidedData } from '../../utils/check';

export default function Register(){
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [dogName, setDogName] = useState("")
    const [invalidData, setInvalidData] = useState(false)
    const navigate = useNavigate()
    
    const handleCredentialsValidation = (login, password, name, dogName) => {
        const areCredentialsValid = checkProvidedData(login, password, name, dogName)
        if(areCredentialsValid){
            navigate("/swiping", {state:{character: login}})
        }
        else{
            setInvalidData(true)
        }
    }

    return (
        <>
            <p>{invalidData && "Invalid data, every field needs to be filled, try one more time"}</p>
            <TextField variant="outlined" label="login" style={{margin: "5px"}} value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
            <TextField variant="outlined" label="password" style={{margin: "5px"}} value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
            <TextField variant="outlined" label="name" style={{margin: "5px"}} value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <TextField variant="outlined" label="dogName" style={{margin: "5px"}} value={dogName} onChange={(e)=>{setDogName(e.target.value)}}/>
            <Button onClick={()=>{handleCredentialsValidation(login, password, name, dogName)}} variant="contained"  style={{margin: "5px"}}>Sign up</Button>
        </>
    )
}