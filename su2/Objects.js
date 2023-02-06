let users=[2,4,5,4,2,1,4,6]

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum1=0;
  function sum(){
    if(Object.entries(salaries)===null){
        return false;
    } 
    else{
        for(let values in salaries){
             sum1 = sum1+salaries[values];
            
        }
        return sum1;
    }
  }

  console.log(sum());