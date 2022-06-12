
export const checkCredentials = (login, password, allUsers) => {
    const properUser = allUsers.find(elem => elem.login === login)
    if(properUser && properUser.password === password){
        return true
    }
    else{
        return false
    }
}