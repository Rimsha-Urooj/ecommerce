const userDetail = [
    {
        'name': 'Rimsha',
        'email': 'rimshaurooj56@gmail.com',
        'password': '1234567',
    },
    {
        'name': 'Rimsha Urooj',
        'email': 'fa17-bse-154@cuilahore.edu.pk',
        'password': '1111111',
    },
    {
        'name': 'Urooj',
        'email': 'test@gmail.com',
        'password': 'test123',
    },
    {
        'name': 'Abc',
        'email': 'abc@gmail.com',
        'password': 'abc1234',
    },
    {
        'name': 'Sam',
        'email': 'sam@gmail.com',
        'password': 'sam1234',
    },
];


let user;
export function login( loginEmail, loginPassword){
   
    
    // const product = products.find((product) => product.id === params.productId);
    let i;
    for (i = 0; i<userDetail.length; i++){
        
        if(userDetail[i].email===loginEmail && userDetail[i].password=== loginPassword){
            console.log("here");
            user = userDetail[i];
            return true;
        }
    }
    // console.log(user);
    return false;
    
}

export function userInfo(){
    console.log(user);
    return user;
}

