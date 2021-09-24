const userDetail = {
    'email': 'rimshaurooj56@gmail.com',
    'password': '1234567',
}

export function login( loginEmail, loginPassword){
    console.log(loginEmail);
    console.log(loginPassword);
    console.log(userDetail.email);
    if (userDetail.email===loginEmail && userDetail.password===loginPassword){
        return true;
    }
    return false;
}

