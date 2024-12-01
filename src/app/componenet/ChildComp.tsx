import React from 'react'

const ChildComp = (props : any) => {
    console.log(props)
  return (
    <div>
        <h2 className='text-6xl'> {props.favdish}</h2>
    </div>
  )
}

export default ChildComp