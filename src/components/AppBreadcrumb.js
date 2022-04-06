import React from 'react'
import routes from '../routes'

const AppBreadcrumb = () => {
    const array = ['Dashboards','Dashboard']

  return (
     <div className="row">
        <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Dashboard</h4>
                <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                        {
                            array.map((item,index)=>(
                                <li key={index} className="breadcrumb-item"><a href="/">{item}</a></li>
                            )) 
                        }
                        {/* <li className="breadcrumb-item"><a href="/">Dashboards</a></li>
                        <li className="breadcrumb-item active">Dashboard</li> */}
                    </ol>
                </div>
            </div>
            
        </div>
    </div> 
  )
}

export default AppBreadcrumb
