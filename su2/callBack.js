
    let cart=["Mobile","Headphone","Books"];

    function createOrder(cart){
        let orderId=1222;
        
        if(orderId===1222){
            console.log("Order id for items: "+cart+" is : "+orderId);
            return orderId;
        }
    }

    createOrder(cart,payment());

    function payment(orderId) {
        console.log("orderId is : "+orderId);
    }