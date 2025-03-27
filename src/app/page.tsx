export default function Home(){

  type nirmal ={
    name:string,
    age:number,
  }

  function showname(person:nirmal):void{

    console.log(`${person.name,}`)
  }

  showname({
     name:"nirmal",
     age:5,
  })

 return(
  <>
  <h1>Nirmal Pandey</h1>
  </>
 ) 
    }