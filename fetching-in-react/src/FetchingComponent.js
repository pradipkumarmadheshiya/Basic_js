import React, {useEffect, useState} from "react";

function FetchingComponent(){

    const [data, setData]=useState([])

    useEffect(()=>{

        const url="https://jsonplaceholder.typicode.com/users"

        fetch(url)
            .then(res=>res.json())
            .then(val=>setData(val))

    },[])

    return(
        <div id="box">
            {
                data.map((item)=>{
                    return <div className="card" key={item.id}>
                        <h3>Name: {item.name}</h3>
                        <p>Username: {item.username}</p>
                        <p className="email">Email: {item.email}</p>
                        <p className="address">Address: Street- {item.address?.street}, City: {item.address?.city},  Zeepcode: {item.address?.zeepcode}</p>
                    </div>
                })
            }
        </div>
    )
    
}
export default FetchingComponent