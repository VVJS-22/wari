import React from 'react'

const LedgerAdd = () => {
  return (
    <div className="row">
        <div className="col-lg-12">
            <div className="card" id="customerList">
                <div className="card-body border-bottom-dashed border-bottom">
                    <form>
                        <div className="row g-3">
                            <div className="col-lg-3">
                                <div className="search-box">
                                    <input type="text" className="form-control search"
                                        placeholder="Search ..."/>
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="row g-3">


                                    <div className="col-sm-3">
                                        <div className="">
                                            <input type="date" className="form-control"
                                                id="datepicker-range" data-provider="flatpickr"
                                                data-date-format="d M, Y" data-range-date="true"
                                                placeholder="Select date"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="">
                                            <input type="date" className="form-control"
                                                id="datepicker-range" data-provider="flatpickr"
                                                data-date-format="d M, Y" data-range-date="true"
                                                placeholder="Select date"/>
                                        </div>
                                    </div>
                                

                                    <div className="col-sm-3">
                                        <div>
                                            <button type="button" className="btn btn-primary w-100"
                                                onclick="SearchData();"> <i
                                                    className="ri-equalizer-fill me-2 align-bottom"></i>Filters</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <button type="button" className="btn btn-success add-btn"
                                    data-bs-toggle="modal" id="create-btn"
                                    data-bs-target="#showModal"><i
                                        className="ri-add-line align-bottom me-1"></i> Add Area</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-body">
                    <div>
                        <div className="table-responsive table-card mb-1">
                            <table className="table align-middle" id="customerTable">
                                <thead className="table-light text-muted">
                                    <tr>
                                        <th scope="col" style={{width: "50px"}}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"
                                                    id="checkAll" value="option"/>
                                            </div>
                                        </th>

                                        <th className="sort" data-sort="sno">S No</th>
                                        <th className="sort" data-sort="area_name">Area Name</th>
                                        <th className="sort" data-sort="city_id">City</th>
                                        <th className="sort" data-sort="action">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="list form-check-all">
                                    <tr>
                                        <th scope="row">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"
                                                    name="chk_child" value="option1"/>
                                            </div>
                                        </th>
                                        <td className="id" style={{display:"none"}}><a
                                                href="javascript:void(0);"
                                                className="fw-medium link-primary">#VZ2101</a></td>
                                        <td className="sno">1</td>
                                        <td className="area_name">Salem</td>
                                        <td className="city_id">33</td>
                                        <td>
                                            <ul className="list-inline hstack gap-2 mb-0">
                                                <li className="list-inline-item edit"
                                                    data-bs-toggle="tooltip" data-bs-trigger="hover"
                                                    data-bs-placement="top" title="Edit">
                                                    <a href="#showModal" data-bs-toggle="modal"
                                                        className="text-primary d-inline-block edit-item-btn">
                                                        <i className="ri-pencil-fill fs-16"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item" data-bs-toggle="tooltip"
                                                    data-bs-trigger="hover" data-bs-placement="top"
                                                    title="Remove">
                                                    <a className="text-danger d-inline-block remove-item-btn"
                                                        data-bs-toggle="modal"
                                                        href="#deleteRecordModal">
                                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="noresult" style={{display: "none"}}>
                                <div className="text-center">
                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json"
                                        trigger="loop" colors="primary:#121331,secondary:#08a88a"
                                        style={{width:"75px",height:"75px"}}>
                                    </lord-icon>
                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                    <p className="text-muted mb-0">We've searched more than 150+ customer We
                                        did not find any
                                        customer for you search.</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className="pagination-wrap hstack gap-2">
                                <a className="page-item pagination-prev disabled" href="#">
                                    Previous
                                </a>
                                <ul className="pagination listjs-pagination mb-0"></ul>
                                <a className="page-item pagination-next" href="#">
                                    Next
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="modal fade" id="showModal" tabindex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header bg-light p-3">
                                    <h5 className="modal-title" id="exampleModalLabel"></h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" id="close-modal"></button>
                                </div>
                                <form action="#">
                                    <div className="modal-body">
                                        <input type="hidden" id="id-field" />

                                        <div className="mb-3" id="modal-id" style={{display: "none"}}>
                                            <label for="id-field1" className="form-label">ID</label>
                                            <input type="text" id="id-field1" className="form-control"
                                                placeholder="ID" readonly />
                                        </div>

                                        <div className="mb-3">
                                            <label for="customername-field" className="form-label">Area
                                                Name</label>
                                            <input type="text" id="areaname-field"
                                                className="form-control" placeholder="Enter name"
                                                required />
                                        </div>


                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">City</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>33</option>
                                                <option>31</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <div className="hstack gap-2 justify-content-end">
                                            <button type="button" className="btn btn-light"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-success"
                                                id="add-btn">Add Area</button>
                                            {/* <button type="button" className="btn btn-success"
                                                id="edit-btn">Update</button> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade zoomIn" id="deleteRecordModal" tabindex="-1"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" id="btn-close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mt-2 text-center">
                                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json"
                                            trigger="loop" colors="primary:#f7b84b,secondary:#f06548"
                                            style={{width:"100px",height:"100px"}}></lord-icon>
                                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                                            <h4>Are you sure ?</h4>
                                            <p className="text-muted mx-4 mb-0">Are you sure you want to
                                                remove this record ?</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                        <button type="button" className="btn w-sm btn-light"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn w-sm btn-danger "
                                            id="delete-record">Yes, Delete It!</button>
                                    </div>
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

export default LedgerAdd