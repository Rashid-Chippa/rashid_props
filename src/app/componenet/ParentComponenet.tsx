import React from 'react'
import Childcomponent from './Childcomponent'
import ChildComp from './ChildComp'
import ChildCom from './ChildCom'
import ChildCo from './ChildCo'

const ParentComponenet = () => {
    let name = "M.Rashid"
    let favdish = "Tampura Prawns"
    let favcolor = "Light Pink"
    let fullname = "M.Rashid Chippa"
  return (
    <div>
        < Childcomponent name={name} />
        < ChildComp favdish={favdish} />
        < ChildCom favcolor={favcolor} />
        < ChildCo fullname={fullname} />
    </div>
  )
}

export default ParentComponenet
