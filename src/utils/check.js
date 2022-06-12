
export const checkCredentials = (login, password, allUsers) => {
    const properUser = allUsers.find(elem => elem.login === login)
    if(properUser && properUser.password === password){
        return true
    }
    else{
        return false
    }
}

export const checkProvidedData = (login, password, name, dogName) => {
    if(login && password && name && dogName){
        return true
    }
    else{
        return false
    }
}