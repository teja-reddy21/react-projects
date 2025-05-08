import { useEffect, useState } from "react"

export default function SearchAutoComplete(){

const [loading,setLoading]=useState(false);
const [users,setUsers]=useState([])
const [error,setError]=useState(null)

async function fetchListOfUsers(){
    try{
       const response=await fetch('https://dummyjson.com/users')
       const data=await response.json()
       

       if(data && data.Users && data.Users.length){
        setUsers(data.users.map((userItem)=> userItem.firstName))
        setLoading(false)
        setError(null)
       }
    }catch(error){
        setLoading(false)
        console.log(error)
        setError(error)
    }

}

useEffect(()=>{
    fetchListOfUsers()
},[])
console.log(users)


    return (
        <div className="search-autocomplte-container">
            <input name="search-users" placeholder="search User here..."/>
        </div>
    )
}