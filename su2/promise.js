// const cart=[2,3,4,5,67,8]

// createOrder(cart)
// .then(function(orderId){
//     console.log(orderId);
//     return orderId;
// })
// .catch(function(err){
//     console.log(err.message)
// })
// .then(function(){
//     console.log("Yeh toh chalega hi chalega !!!")
// });


// function createOrder(cart)
// {
//     const pr = new Promise(function(resolve,reject){
//         if(!validate())
//         {   const err= new Error("An error occured");
//             reject(err)
//         }
//         else{
//         let orderId=1234555;
//         if(orderId)
//         {
//             setTimeout(function(){
//              resolve(orderId)   
//             },1000)
//         }
//     }
//     });
//     return pr;
// }

// function validate(){
//     return true;
// }




        // callback
// console.log("Start")

// function getName(name,callback){
  
//     setTimeout(()=>{
     
//         console.log("Inside getName setTimeout")
     
//         callback(name) ;
    
//     },3500)
// }

// getName("monal",(name)=>{

//     console.log(name);

// })

// console.log("End")

const cart = ["shirt","headphone","watch","book"];

    order().then(function(orderId){
    console.log(orderId);
    return orderId;
}).catch(function(err){
    console.log(err.message);
    // return err;
}).then(function(orderId){
    // console.log(orderId);
    return payment(orderId)
}).then(function({method,orderId}){
    console.log(method,orderId);
    // return method,orderId;
}).catch(function(err){
    console.log(err.message);
})

function order(){
    const pr = new Promise (function(resolve,reject){
        if(!validate())
        {   const err= new Error("An error occured");
        reject(err)
        }
        else{
            let orderId=1234555;
            if(orderId)
            {
                resolve(orderId);
            }
        }
    });
    return pr;
}
function validate(){
    return true;
}

function payment(orderId)
{
    const pr= new Promise(function(resolve,reject){
        let method="cash"
    if(method!="cash")
    {
        let err="Not a payment method"
        reject(err);
    }
    else{

        resolve({method,orderId});
    }
    });
    return pr;
    
}