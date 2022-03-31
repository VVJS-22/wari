import React from 'react'

const List = () => {
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
                                            className="ri-add-line align-bottom me-1"></i> Add Customer</button>
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

                                            <th className="sort" data-sort="sno">S.No</th>
                                            <th className="sort" data-sort="product">Product</th>
                                            <th className="sort" data-sort="qty">Qty</th>
                                            <th className="sort" data-sort="rate">Rate</th>
                                            <th className="sort" data-sort="taxrate">Tax Rate</th>
                                            <th className="sort" data-sort="tax">Tax%</th>
                                            <th className="sort" data-sort="taxamt">Tax.Amt</th>
                                            <th className="sort" data-sort="amount">Amount</th>
                                            <th className="sort" data-sort="disper">Dis%</th>
                                            <th className="sort" data-sort="disamt">Dis.Amt</th>
                                            <th className="sort" data-sort="netamt">Net Amt</th>

                                            <th className="sort" data-sort="status">Status</th>
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
                                                    href="/"
                                                    className="fw-medium link-primary">#VZ2101</a></td>
                                            <td className="sno">1</td>
                                            <td className="product">Mary Cousar</td>
                                            <td className="qty">10</td>
                                            <td className="rate">125</td>
                                            <td className="taxrate">150</td>
                                            <td className="tax">12.5%</td>
                                            <td className="taxamt">25</td>
                                            <td className="amt">1250</td>
                                            <td className="disper">5%</td>
                                            <td className="disamt">5</td>
                                            <td className="netamt">1200</td>
                                            <td className="status"><span
                                                    className="badge badge-soft-success text-uppercase">Active</span>
                                            </td>
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
                                    <a className="page-item pagination-prev disabled" href="/">
                                        Previous
                                    </a>
                                    <ul className="pagination listjs-pagination mb-0"></ul>
                                    <a className="page-item pagination-next" href="/">
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
                                                <label for="customername-field" className="form-label">Customer
                                                    Name</label>
                                                <input type="text" id="customername-field"
                                                    className="form-control" placeholder="Enter name"
                                                    required />
                                            </div>

                                            <div className="mb-3">
                                                <label for="email-field" className="form-label">Email</label>
                                                <input type="email" id="email-field" className="form-control"
                                                    placeholder="Enter email" required />
                                            </div>

                                            <div className="mb-3">
                                                <label for="phone-field" className="form-label">Phone</label>
                                                <input type="text" id="phone-field" className="form-control"
                                                    placeholder="Enter phone no." required />
                                            </div>

                                            <div className="mb-3">
                                                <label for="date-field" className="form-label">Joining
                                                    Date</label>
                                                <input type="date" id="date-field" className="form-control"
                                                    data-provider="flatpickr" data-date-format="d M, Y"
                                                    required placeholder="Select date" />
                                            </div>

                                            <div>
                                                <label for="status-field" className="form-label">Status</label>
                                                <select className="form-control" data-trigger
                                                    name="status-field" id="status-field">
                                                    <option value="">Status</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Block">Block</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <div className="hstack gap-2 justify-content-end">
                                                <button type="button" className="btn btn-light"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-success"
                                                    id="add-btn">Add Customer</button>
                                                <button type="button" className="btn btn-success"
                                                    id="edit-btn">Update</button>
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

export default List