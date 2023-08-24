import React, { useState } from "react";
import PfuncCompo from "./PfuncCompo";

function PropsCompo(){
    const [data, setData] = useState(0)
    const [data1, setData2] = useState({
        name: "Bhanu",
        age:23,
    })
    return(
        <div>
            <PfuncCompo value = {{data, setData}} value2 = {{data1, setData2}}/>
        </div>
    )
}

export default PropsCompo;