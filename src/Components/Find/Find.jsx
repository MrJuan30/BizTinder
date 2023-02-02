import React from 'react'
import { useSelector } from "react-redux";

const Find = () => {

    const UserName = useSelector((state) => state.UserName);



    return (
        <>

            <div>

                <h1>{UserName}</h1>

            </div>



        </>
    )
}

export default Find