import React, { useEffect } from 'react'

const Dashboard = () => {

    const dashValidity = async()=>{
        let token = localStorage.getItem("usersdatatoken")
        const res = await fetch("http://localhost:8080/userValidity",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token
          }
        })
        const data =await res.json()

        if(data.status === 401 || !data){
          console.log("Error")
        }else{
          console.log("User Verified")
        }
    }

    useEffect(()=>{
        dashValidity()

    },[])
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
