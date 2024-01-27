import {useState} from 'react'

function Destructuring() {
   const [count,setCount] = useState(0)
  let user1 = {
    name:"John",
    email:"John@ironhack.com",
    city:"London"
  }
 /*  let name = user1.name
  let email = user1.email
  let city = user1.city */

  // destructuring an object
  let {email,city,name} = user1

  user1.name="NOT JOHN"
  /* onsole.log(city)
  console.log(firstName)
  console.log(user1) */



// Destructuring arrays
/*   let myArray = [100,200,300,400,500]

  let [,,number] = myArray */

/*   console.log(number)
 */

 
  return (
    <div>Destructuring</div>
  )
}

export default Destructuring