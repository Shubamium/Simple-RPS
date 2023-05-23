import React from 'react'

export default function Slot({data,onClick}) {
    if(data === null || data === undefined)return<></>;
    return (
        <div onClick={()=>{onClick && onClick()}}>data:{data}</div>
    )
}
