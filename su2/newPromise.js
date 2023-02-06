// CreateOrder, ProceedToPayment, ShowOrderSummary, updateWallet

const cart = ["shirt","headphone","watch","book"];

CreateOrder(cart)
.then((cart)=>{

    return ProceedToPayment(cart)

})
.catch((err)=>{
    console.log(err.message);
})
.then((cart)=>{
    return ShowOrderSummary(cart)
})
.catch((err)=>{
    console.log(err.message);
})
.then((cart)=>{
    return updateWallet(cart);
})
.catch((err)=>{
    console.log(err.message);
})

function CreateOrder(cart){
   let pr1=new Promise((resolve,reject)=>{
     if(!validate()){
        let err = new Error("Not validate")
        reject(err);
    }
    else{
        let orderId = 123123;
        
        if(orderId){
            resolve(cart)
            console.log(orderId)
            
        }
    }
   })
   return pr1
}

function validate(){
    return true ;
}

function ProceedToPayment(cart){
    let pr2= new  Promise(function(resolve,reject){
        if(cart.length===0){
            let err= new  Error("Cart is empty")
            reject(err);
        }
        else{
            let ms=console.log("Procees to payment block");
            resolve(cart);
        }
    })

    return pr2;
}

function ShowOrderSummary(cart){
    let pr3= new Promise((resolve,reject)=>{
        if(cart.length===0){
            let err=new  Error("Cart is empty");
            reject(err);
        }
        else{
            function m(){
                for(let key of cart){
                    console.log(`cart items are : ${key}`);
                }
            }
            resolve(cart,m())
        }
    })
    return pr3;
}

function updateWallet(cart){
    let pr4= new Promise((resolve,reject)=>{
        if(cart.length===0){
            let err=new  Error("Cart is empty");
            reject(err);
        }
        else{
            let ms=console.log("Update wallet block");
            resolve(ms)
        }
    })
    return pr4
}