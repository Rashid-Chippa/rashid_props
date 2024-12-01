import React from 'react'


    const Childcomponenet = (props:any) => {
        console.log(props)
        return (
            <div>
            <h1 className='text-9xl'>{props.name}</h1>
            </div>
        )
    }


export default Childcomponenet
