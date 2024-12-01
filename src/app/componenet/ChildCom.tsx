import React from 'react'

const ChildCom = (props :any) => {
    console.log(props)
  return (
    <div>
        <h3 className='text-8xl'>{props.favcolor}</h3>
    </div>
  )
}

export default ChildCom