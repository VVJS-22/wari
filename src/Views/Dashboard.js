import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <div className="row">
            <div className="col-xl-12">
                <div className="card crm-widget">
                    <div className="card-body p-0">
                        <div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0">
                            <div className="col">
                                <div className="py-4 px-3">
                                    <h5 className="text-muted text-uppercase fs-13">Products <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i></h5>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <i className="ri-space-ship-line display-6 text-muted"></i>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h2 className="mb-0"><span className="counter-value" data-target="197">65</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mt-3 mt-md-0 py-4 px-3">
                                    <h5 className="text-muted text-uppercase fs-13">Total Customer <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i></h5>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <i className="ri-exchange-dollar-line display-6 text-muted"></i>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h2 className="mb-0"><span className="counter-value" data-target="489.4">132</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mt-3 mt-md-0 py-4 px-3">
                                    <h5 className="text-muted text-uppercase fs-13">Suppliers 
                                    {/* <i className="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i> */}
                                    </h5>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <i className="ri-pulse-line display-6 text-muted"></i>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h2 className="mb-0"><span className="counter-value" data-target="32.89">16</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mt-3 mt-lg-0 py-4 px-3">
                                    <h5 className="text-muted text-uppercase fs-13">Employee 
                                    {/* <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i> */}
                                    </h5>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <i className="ri-trophy-line display-6 text-muted"></i>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h2 className="mb-0"><span className="counter-value" data-target="1596.5">45</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mt-3 mt-lg-0 py-4 px-3">
                                    <h5 className="text-muted text-uppercase fs-13">Annual Deals <i className="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i></h5>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <i className="ri-service-line display-6 text-muted"></i>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h2 className="mb-0"><span className="counter-value" data-target="2659">0</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                        

        <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 overflow-hidden">
                                        <p
                                            className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                            Orders</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className="text-success fs-14 mb-0">
                                            <i className="ri-arrow-right-up-line fs-13 align-middle"></i>
                                            +16.24 %
                                        </h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                    <div>
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span
                                                className="counter-value" data-target="559.25">0</span>
                                        </h4>
                                        <a href="/" className="text-decoration-underline">View all orders</a>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-success rounded fs-3">
                                            <i className="bx bx-dollar-circle text-success"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 overflow-hidden">
                                        <p
                                            className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                            Sales</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className="text-success fs-14 mb-0">
                                            <i className="ri-arrow-right-up-line fs-13 align-middle"></i>
                                            +3.57 %
                                        </h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                    <div>
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">₹<span
                                                className="counter-value" data-target="36894">0</span>k</h4>
                                        <a href="/" className="text-decoration-underline">See all sales</a>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-info rounded fs-3">
                                            <i className="bx bx-shopping-bag text-info"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 overflow-hidden">
                                        <p
                                            className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                            Purchase</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className="text-success fs-14 mb-0">
                                            <i className="ri-arrow-right-up-line fs-13 align-middle"></i>
                                            +29.08 %
                                        </h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                    <div>
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">₹<span
                                                className="counter-value" data-target="183.35">0</span>k
                                        </h4>
                                        <a href="/" className="text-decoration-underline">See all purchase</a>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-warning rounded fs-3">
                                            <i className="bx bx-user-circle text-warning"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 overflow-hidden">
                                        <p
                                            className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                            Expense</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className="text-muted fs-14 mb-0">
                                            +0.00 %
                                        </h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                    <div>
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">₹<span
                                                className="counter-value" data-target="165.89">0</span>k
                                        </h4>
                                        <a href="/" className="text-decoration-underline">view expenses</a>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-primary rounded fs-3">
                                            <i className="bx bx-wallet text-primary"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div> 


        <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header border-0 align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Order Overview</h4>
                            {/* <div>
                                <button type="button" className="btn btn-soft-secondary btn-sm">
                                    ALL
                                </button>
                                <button type="button" className="btn btn-soft-secondary btn-sm">
                                    1M
                                </button>
                                <button type="button" className="btn btn-soft-secondary btn-sm">
                                    6M
                                </button>
                                <button type="button" className="btn btn-soft-primary btn-sm">
                                    1Y
                                </button>
                            </div> */}
                        </div>

                        <div className="card-header p-0 border-0 bg-soft-light">
                            <div className="row g-0 text-center">
                                <div className="col-6 col-sm-3">
                                    <div className="p-3 border border-dashed border-start-0">
                                        <h5 className="mb-1"><span className="counter-value"
                                                data-target="9851">0</span></h5>
                                        <p className="text-muted mb-0">Number of Orders</p>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <div className="p-3 border border-dashed border-start-0">
                                        <h5 className="mb-1"><span className="counter-value"
                                                data-target="1026">0</span></h5>
                                        <p className="text-muted mb-0">Active Orders</p>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <div className="p-3 border border-dashed border-start-0">
                                        <h5 className="mb-1">₹<span className="counter-value"
                                                data-target="228.89">0</span>k</h5>
                                        <p className="text-muted mb-0">Revenue</p>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <div className="p-3 border border-dashed border-start-0 border-end-0">
                                        <h5 className="mb-1 text-success"><span className="counter-value"
                                                data-target="10589">0</span>h</h5>
                                        <p className="text-muted mb-0">Working Hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0 pb-2">
                            <div>
                                <div id="projects-overview-chart"
                                    data-colors='["--vz-primary", "--vz-warning", "--vz-success"]'
                                    dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>


        <div className="row">
            <div className="col-xxl-3 col-sm-6 project-card">
                <div className="card">
                    <div className="card-body">
                        <div className="p-3 mt-n3 mx-n3 bg-soft-danger rounded-top">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h5 className="mb-0 fs-14"><a href="apps-projects-overview.html"
                                            className="text-dark">Gowtham Erode</a></h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="d-flex gap-1 align-items-center my-n2">
                                        <button type="button"
                                            className="btn avatar-xs p-0 favourite-btn active">
                                            <span className="avatar-title bg-transparent fs-15">
                                                <i className="ri-star-fill"></i>
                                            </span>
                                        </button>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-link text-muted p-1 mt-n1 py-0 text-decoration-none fs-15"
                                                data-bs-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="true">
                                                <i data-feather="more-horizontal" className="icon-sm"></i>
                                            </button>

                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item"
                                                    href="apps-projects-overview.html"><i
                                                        className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                    View</a>
                                                <a className="dropdown-item" href="apps-projects-create.html"><i
                                                        className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Edit</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="/" data-bs-toggle="modal"
                                                    data-bs-target="#removeProjectModal"><i
                                                        className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-3">
                            <div className="row gy-3">
                                <div className="col-6">
                                    <div>
                                        <p className="text-muted mb-1">Status</p>
                                        <div className="badge badge-soft-warning fs-12">Inprogess</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <p className="text-muted mb-1">Deadline</p>
                                        <h5 className="fs-14">18 Sep, 2022</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <div className="avatar-group">
                                    <p className="text-muted mb-0 me-2">Order ID :</p>
                                    <div className="avatar-group">
                                        <p> AS00125</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                    <div>Progress</div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div>50%</div>
                                </div>
                            </div>
                            <div className="progress progress-sm animated-progress">
                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="50"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-xxl-3 col-sm-6 project-card">
                <div className="card">
                    <div className="card-body">
                        <div className="p-3 mt-n3 mx-n3 bg-soft-warning rounded-top">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h5 className="mb-0 fs-14"><a href="apps-projects-overview.html"
                                            className="text-dark">Selva Covai</a></h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="d-flex gap-1 align-items-center my-n2">
                                        <button type="button"
                                            className="btn avatar-xs p-0 favourite-btn active">
                                            <span className="avatar-title bg-transparent fs-15">
                                                <i className="ri-star-fill"></i>
                                            </span>
                                        </button>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-link text-muted p-1 mt-n1 py-0 text-decoration-none fs-15"
                                                data-bs-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="true">
                                                <i data-feather="more-horizontal" className="icon-sm"></i>
                                            </button>

                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item"
                                                    href="apps-projects-overview.html"><i
                                                        className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                    View</a>
                                                <a className="dropdown-item" href="apps-projects-create.html"><i
                                                        className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Edit</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="/" data-bs-toggle="modal"
                                                    data-bs-target="#removeProjectModal"><i
                                                        className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="row gy-3">
                                <div className="col-6">
                                    <div>
                                        <p className="text-muted mb-1">Status</p>
                                        <div className="badge badge-soft-success fs-12">Completed</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <p className="text-muted mb-1">Deadline</p>
                                        <h5 className="fs-14"> 10 Jun, 2022</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <div className="avatar-group">
                                    <p className="text-muted mb-0 me-2">Order ID :</p>
                                    <div className="avatar-group">
                                        <p> AS00125</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                    <div>Progress</div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div><i className="ri-list-check align-bottom me-1 text-muted"></i>
                                            18/42</div>
                                </div>
                            </div>
                            <div className="progress progress-sm animated-progress">
                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="95"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-sm-6 project-card">
                <div className="card">
                    <div className="card-body">
                        <div className="p-3 mt-n3 mx-n3 bg-soft-info rounded-top">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h5 className="mb-0 fs-14"><a href="apps-projects-overview.html"
                                            className="text-dark">Vetri</a></h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="d-flex gap-1 align-items-center my-n2">
                                        <button type="button" className="btn avatar-xs p-0 favourite-btn">
                                            <span className="avatar-title bg-transparent fs-15">
                                                <i className="ri-star-fill"></i>
                                            </span>
                                        </button>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-link text-muted p-1 mt-n1 py-0 text-decoration-none fs-15"
                                                data-bs-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="true">
                                                <i data-feather="more-horizontal" className="icon-sm"></i>
                                            </button>

                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item"
                                                    href="apps-projects-overview.html"><i
                                                        className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                    View</a>
                                                <a className="dropdown-item" href="apps-projects-create.html"><i
                                                        className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Edit</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="/" data-bs-toggle="modal"
                                                    data-bs-target="#removeProjectModal"><i
                                                        className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="row gy-3">
                                <div className="col-6">
                                    <div>
                                        <p className="text-muted mb-1">Status</p>
                                        <div className="badge badge-soft-warning fs-12">Inprogess</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <p className="text-muted mb-1">Deadline</p>
                                        <h5 className="fs-14">08 Apr, 2022</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <div className="avatar-group">
                                <p className="text-muted mb-0 me-2">Order ID :</p>
                                    <div className="avatar-group">
                                        <p> AS00125</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                    <div>Progress</div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div><i className="ri-list-check align-bottom me-1 text-muted"></i>
                                            18/42</div>
                                </div>
                            </div>
                            <div className="progress progress-sm animated-progress">
                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="41"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "41%"}}>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-xxl-3 col-sm-6 project-card">
                <div className="card">
                    <div className="card-body">
                        <div className="p-3 mt-n3 mx-n3 bg-soft-success rounded-top">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h5 className="mb-0 fs-14"><a href="apps-projects-overview.html"
                                            className="text-dark">Aruna Salem</a></h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="d-flex gap-1 align-items-center my-n2">
                                        <button type="button"
                                            className="btn avatar-xs p-0 favourite-btn active">
                                            <span className="avatar-title bg-transparent fs-15">
                                                <i className="ri-star-fill"></i>
                                            </span>
                                        </button>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-link text-muted p-1 mt-n1 py-0 text-decoration-none fs-15"
                                                data-bs-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="true">
                                                <i data-feather="more-horizontal" className="icon-sm"></i>
                                            </button>

                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item"
                                                    href="apps-projects-overview.html"><i
                                                        className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                    View</a>
                                                <a className="dropdown-item" href="apps-projects-create.html"><i
                                                        className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Edit</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="/" data-bs-toggle="modal"
                                                    data-bs-target="#removeProjectModal"><i
                                                        className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="row gy-3">
                                <div className="col-6">
                                    <div>
                                        <p className="text-muted mb-1">Status</p>
                                        <div className="badge badge-soft-warning fs-12">Inprogess</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <p className="text-muted mb-1">Deadline</p>
                                        <h5 className="fs-14">22 Nov, 2022</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <div className="avatar-group">
                                    <p className="text-muted mb-0 me-2">Order ID :</p>
                                    <div className="avatar-group">
                                        <p> AS00125</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mb-2">
                                <div className="flex-grow-1">
                                    <div>Progress</div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div><i className="ri-list-check align-bottom me-1 text-muted"></i>
                                            18/42</div>
                                </div>
                            </div>
                            <div className="progress progress-sm animated-progress">
                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="35"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "35%"}}>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard