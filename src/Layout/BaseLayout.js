import React, { useState } from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import sidemenu from '../sidemenu'

const BaseLayout = () => {

  const [menu,setMeun] = useState([sidemenu])

  return (
    <div id="layout-wrapper">
        <Header/>
        <Sidebar/>
        <div className="vertical-overlay"></div>
        <Content items={menu}/>
    </div>
  )
}

export default BaseLayout