import React, {useState } from 'react'
import {TextField, Button} from '@mui/material'
import { useNavigate } from "react-router-dom";
import allUsers from "../../users.json"
import "./index.css"

export default function LoginPage() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [invalidCredentials, setInvalidCredentials] = useState(false)
    const navigate = useNavigate()

    const checkCredentials = (login, password) => {
        const properUser = allUsers.find(elem => elem.login === login)
        if(properUser && properUser.password === password){
            navigate("/swiping")
        }
        else{
            setInvalidCredentials(true)
        }
    }

    return (
        <>
            <p>{invalidCredentials && "Invalid creadentials, try one more time"}</p>
            <TextField variant="outlined" label="login" style={{margin: "5px"}} value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
            <TextField variant="outlined" label="password" style={{margin: "5px"}} value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
            <Button variant="contained" onClick={()=>{checkCredentials(login, password)}}>Sign in</Button>
            <Button variant="contained" onClick={()=>{checkCredentials(login, password)}}>Register</Button>
        </>

    )
}
