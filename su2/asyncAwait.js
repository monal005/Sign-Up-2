

    async function test()
    {
        console.log("1: message");
        const response = await fetch("names.json");
        const names= await response.json();
        
        console.log(names) ;

    }
    test();
    console.log("4: message");

    async function test()
    {
      console.log("dasdasd");
      const rel = await fetch("names.json")
      const rem = await rel.json();
    //   console.log(rem);
    return rem;
    }
    fetch("names.json").then((res)=>{
        return res.json();
    }).then(val=>{
        console.log(val)
    })
    .catch((error)=>{
        console.log(error);
    });

    console.log(test())
  
    test()

         