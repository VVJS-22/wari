import React from 'react'

const AddCustomer = () => {
  return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="live-preview">
                            <form action="#">
                                <div className='row g-3'>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="firstNameinput" class="form-label">Code</label>
                                            <input type="text" class="form-control" placeholder="Enter Code" id="firstNameinput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="firstNameinput" class="form-label">Product Name</label>
                                            <input type="text" class="form-control" placeholder="Enter product Name" id="firstNameinput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="firstNameinput" class="form-label">Print Name</label>
                                            <input type="text" class="form-control" placeholder="Enter Print Name" id="firstNameinput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="firstNameinput" class="form-label">HSN/SAC Code</label>
                                            <input type="text" class="form-control" placeholder="Enter HSN/SAC Code" id="firstNameinput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Category</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>Default</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Sub Category</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>Default</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Brand</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>Default</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Model</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>Default</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Unit</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>Default</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Tax</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>0%</option>
                                                <option>5%</option>
                                                <option>12%</option>
                                                <option>18%</option>
                                                <option>28%</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">Purchase Rate</label>
                                            <input type="tel" class="form-control" placeholder="0" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">Cost Rate</label>
                                            <input type="tel" class="form-control" placeholder="0" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">Wholesale Rate</label>
                                            <input type="tel" class="form-control" placeholder="0" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">Retail Rate</label>
                                            <input type="tel" class="form-control" placeholder="0" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">MRP Rate</label>
                                            <input type="tel" class="form-control" placeholder="0" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">Special Rate</label>
                                            <input type="tel" class="form-control" placeholder="0" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Batch Status</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>No</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">Initial Cost</label>
                                            <input type="tel" class="form-control" placeholder="0" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">Alert Quantity</label>
                                            <input type="tel" class="form-control" placeholder="0" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">Opening Quantity</label>
                                            <input type="tel" class="form-control" placeholder="0" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">Opening Value</label>
                                            <input type="tel" class="form-control" placeholder="0" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div class="mb-3">
                                            <label for="formFile" class="form-label">Upload Image</label>
                                            <input class="form-control" type="file" id="formFile"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Status</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>Active</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="hstack gap-2 justify-content-end">
                                            <button type="submit" class="btn btn-primary">Add Customer</button>
                                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="d-none code-view">
                            <pre className="language-markup" style={{height: "275px"}}>
                            <code>&lt;form action=&quot;#&quot;&gt;
                                &lt;div className=&quot;row g-3&quot;&gt;
                                    &lt;div className=&quot;col-lg-6&quot;&gt;
                                        &lt;div className=&quot;form-floating&quot;&gt;
                                            &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;firstnamefloatingInput&quot; placeholder=&quot;Enter your firstname&quot;&gt;
                                            &lt;label for=&quot;firstnamefloatingInput&quot;&gt;First Name&lt;/label&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div className=&quot;col-lg-6&quot;&gt;
                                        &lt;div className=&quot;form-floating&quot;&gt;
                                            &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;lastnamefloatingInput&quot; placeholder=&quot;Enter your Lastname&quot;&gt;
                                            &lt;label for=&quot;lastnamefloatingInput&quot;&gt;Last Name&lt;/label&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div className=&quot;col-lg-4&quot;&gt;
                                        &lt;div className=&quot;form-floating&quot;&gt;
                                            &lt;input type=&quot;email&quot; className=&quot;form-control&quot; id=&quot;emailfloatingInput&quot; placeholder=&quot;Enter your email&quot;&gt;
                                            &lt;label for=&quot;emailfloatingInput&quot;&gt;Email Address&lt;/label&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div className=&quot;col-lg-4&quot;&gt;
                                        &lt;div className=&quot;form-floating&quot;&gt;
                                            &lt;input type=&quot;password&quot; className=&quot;form-control&quot; id=&quot;passwordfloatingInput&quot; placeholder=&quot;Enter your password&quot;&gt;
                                            &lt;label for=&quot;passwordfloatingInput&quot;&gt;Password&lt;/label&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div className=&quot;col-lg-4&quot;&gt;
                                        &lt;div className=&quot;form-floating&quot;&gt;
                                            &lt;input type=&quot;password&quot; className=&quot;form-control&quot; id=&quot;passwordfloatingInput1&quot; placeholder=&quot;Confirm password&quot;&gt;
                                            &lt;label for=&quot;passwordfloatingInput1&quot;&gt;Confirm Password&lt;/label&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div className=&quot;col-lg-4&quot;&gt;
                                        &lt;div className=&quot;form-floating&quot;&gt;
                                            &lt;input type=&quot;text&quot; className=&quot;form-control&quot; id=&quot;cityfloatingInput&quot; placeholder=&quot;Enter your city&quot;&gt;
                                            &lt;label for=&quot;cityfloatingInput&quot;&gt;City&lt;/label&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div className=&quot;col-lg-4&quot;&gt;
                                        &lt;div className=&quot;form-floating&quot;&gt;
                                            &lt;select className=&quot;form-select&quot; id=&quot;floatingSelect&quot; aria-label=&quot;Floating label select example&quot;&gt;
                                            &lt;option selected&gt;USA&lt;/option&gt;
                                            &lt;option value=&quot;1&quot;&gt;Brazil&lt;/option&gt;
                                            &lt;option value=&quot;2&quot;&gt;France&lt;/option&gt;
                                            &lt;option value=&quot;3&quot;&gt;Germany&lt;/option&gt;
                                            &lt;/select&gt;
                                            &lt;label for=&quot;floatingSelect&quot;&gt;Country&lt;/label&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div className=&quot;col-lg-4&quot;&gt;
                                        &lt;div className=&quot;form-floating&quot;&gt;
                                            &lt;input type=&quot;number&quot; className=&quot;form-control&quot; id=&quot;zipfloatingInput&quot; placeholder=&quot;Enter your zipcode&quot;&gt;
                                            &lt;label for=&quot;zipfloatingInput&quot;&gt;Zipcode&lt;/label&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div className=&quot;col-lg-12&quot;&gt;
                                        &lt;div className=&quot;text-end&quot;&gt;
                                            &lt;button type=&quot;submit&quot; className=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                            &lt;/form&gt;</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddCustomer