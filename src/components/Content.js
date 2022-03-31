import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from '../routes'

const Content = ({items}) => {

    console.log('items',items);
    
  return (
    <div className="main-content">
        <div className="page-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0">Dashboard</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="/">Dashboards</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <Suspense fallback={<div>Loading</div>}>
                    <Switch>
                    {
                        routes.map((route, index) => {
                            return (
                                <Route
                                    path={route.path}
                                    key={index}
                                    component={route.component}
                                    exact={route.exact}
                                />
                            )
                        })
                    }
                    </Switch>
                </Suspense>

            </div>
        </div>

        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <script>document.write(new Date().getFullYear())</script> © Velzon.
                    </div>
                    <div className="col-sm-6">
                        <div className="text-sm-end d-none d-sm-block">
                            Design & Develop by Themesbrand
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Content