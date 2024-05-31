import { useEffect, useState } from "react"

const MultipleReturns = ()=>{
    const url = 'https://api.github.com/users/Quincylarsons'
    const [isLoading, setIsLoading]= useState(true)
    const [error, setError]= useState(false)
    const [user, setUser]=useState(null)

    // fetching api
    useEffect(()=>{
        const fetchUser = async()=>{
            try{
            const response =  await fetch(url)
            if(!response.ok){
                setIsLoading(false)
                setError(true)
                return 
            }
            const data = await  response.json()
            setUser(data);
            console.log(user)
            }catch(error){
                setError(true)
                console.log(error)
            }
            setIsLoading(false)
        }
        fetchUser()
    },[])

    if(isLoading){
        return <div className="loading">Loading ...</div>
    }
    if(error){
        return <div>There is an error</div>
    }

    return (
      <div className="user-info">
        <img src={user.avatar_url} alt="" style={{width:'200px', borderRadius:"50px"}}/>
        <div>
            <p>Name: {user.name}</p>
        </div>
      </div>
    )
}
export default MultipleReturns