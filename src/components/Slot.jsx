import React from 'react'

export default function Slot({data}) {
    if(data === null || data === undefined)return<></>;
    return (
        <div>data:{data}</div>
    )
}
