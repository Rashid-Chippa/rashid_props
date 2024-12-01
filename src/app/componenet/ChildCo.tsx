import React from 'react'

const ChildCo = (props :any) => {
console.log(props)
    return (
    <div>
        <h4 className='text-6xl'>{props.fullname}</h4>
    </div>
  )
}

export default ChildCo