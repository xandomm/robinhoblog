export const isAuthenticated = () => {
    
    const secretCode = sessionStorage.getItem('secretCode')

    if (secretCode==='lkqklosncploqkluleqklmoctnc'){
        return true
    }

    else{
        return false
    }

}
