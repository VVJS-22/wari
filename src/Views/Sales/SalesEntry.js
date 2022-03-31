import React from 'react'

const SalesEntry = () => {
  return (
      <>
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="live-preview">
                            <form action="#">
                                <div className="row g-3">
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Counter</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>Tax</option>
                                                <option>5%</option>
                                                <option>12%</option>
                                                <option>18%</option>
                                                <option>28%</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Customer</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>Cash</option>
                                                <option>Credit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="mb-3">
                                            <label for="firstNameinput" class="form-label">Bill No</label>
                                            <input type="text" class="form-control" placeholder="Enter Bill No" id="firstNameinput"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div class="mb-3">
                                            <label for="firstNameinput" class="form-label">Name</label>
                                            <input type="text" class="form-control" placeholder="Enter Name" id="firstNameinput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="phonenumberInput" class="form-label">Mobile Number</label>
                                            <input type="tel" class="form-control" placeholder="+(245) 451 45123" id="phonenumberInput"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="StartleaveDate" class="form-label">Bill Date</label>
                                            <input type="date" class="form-control" data-provider="flatpickr" id="StartleaveDate"/>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="ForminputState" class="form-label">Bill Type</label>
                                            <select id="ForminputState" class="form-select" data-choices data-choices-sorting="true" >
                                                <option selected>Cash</option>
                                                <option>Credit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="mb-3">
                                            <label for="firstNameinput" class="form-label">GST No</label>
                                            <input type="text" class="form-control" placeholder="Enter GST No" id="firstNameinput"/>
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

        <div className="row">
            <div className="col-lg-12">
                <div className="card" id="customerList">                        
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="invoice-table table table-borderless table-nowrap mb-0">
                                <thead class="align-middle">
                                    <tr class="table-active">
                                        <th scope="col">S No</th>
                                        <th scope="col">
                                            Product Details
                                        </th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">
                                            <div class="d-flex currency-select input-light align-items-center">
                                                Rate  
                                            </div>
                                        </th>
                                        <th scope="col" >Tax Rate</th>
                                        <th scope="col">Tax</th>
                                        <th scope="col">Tax Amt</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Dis%</th>
                                        <th scope="col">Dis Amt</th>
                                        <th scope="col">NetAmount</th>
                                    </tr>
                                </thead>
                                <tbody id="newlink">
                                    <tr id="1" class="product">
                                        <th scope="row" class="product-id">1</th>
                                        <td class="text-start">
                                            <input type="text" class="form-control bg-light border-0" id="productName-1" placeholder="Product Name" required />
                                        </td>
                                        <td>
                                            <input type="number" class="form-control product-price bg-light border-0" id="productRate-1" step="0.01" placeholder="0.00" required  />
                                        </td>
                                        <td>
                                            <input type="number" class="form-control product-price bg-light border-0" id="productRate-1" step="0.01" placeholder="0.00" required  />
                                        </td>
                                        <td>
                                            <input type="number" class="form-control product-price bg-light border-0" id="productRate-1" step="0.01" placeholder="0.00" required  />
                                        </td>
                                        <td>
                                            <input type="number" class="form-control product-price bg-light border-0" id="productRate-1" step="0.01" placeholder="0.00" required  />
                                        </td>
                                        <td>
                                            <input type="number" class="form-control product-price bg-light border-0" id="productRate-1" step="0.01" placeholder="0.00" required  />
                                        </td>
                                        <td>
                                            <input type="number" class="form-control product-price bg-light border-0" id="productRate-1" step="0.01" placeholder="0.00" required  />
                                        </td>
                                        <td>
                                            <input type="number" class="form-control product-price bg-light border-0" id="productRate-1" step="0.01" placeholder="0.00" required  />
                                        </td>
                                        <td>
                                            <input type="number" class="form-control product-price bg-light border-0" id="product-qty-1"  placeholder="0.00" required  />
                                        </td>
                                        <td >
                                            <input type="text" class="form-control bg-light border-0 product-line-price" id="productPrice-1"  placeholder="₹0.00" readonly />
                                        </td>
                                    </tr>
                                </tbody>
                                <tr id="newForm" style={{display: "none"}}></tr>
                                <tr>
                                    <td colspan="9">
                                        <a href="javascript:new_link()" id="add-item" class="btn btn-soft-secondary fw-medium flex-end "><i class="ri-add-fill me-1 align-bottom"></i> Add Item</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="row mt-3 justify-content-end">
                            <div className='col-md-6'>
                                <form action="/">
                                    <div class="row mb-2 justify-content-end" >
                                        <div class="col-md-3">
                                            <label for="nameInput" class="form-label">Gross Total</label>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control bg-light border-0" id="cart-subtotal" placeholder="$0.00" readonly />
                                        </div>
                                    </div>
                                    <div class="row mb-2 justify-content-end">
                                        <div class="col-md-3">
                                            <label for="nameInput" class="form-label">Estimated Tax</label>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control bg-light border-0" id="cart-subtotal" placeholder="$0.00" readonly />
                                        </div>
                                    </div>
                                    <div class="row mb-2 justify-content-end">
                                        <div class="col-md-3">
                                            <label for="nameInput" class="form-label">Discount</label>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control bg-light border-0" id="cart-subtotal" placeholder="$0.00" readonly />
                                        </div>
                                    </div>
                                    <div class="row mb-2 justify-content-end">
                                        <div class="col-md-3">
                                            <label for="nameInput" class="form-label">Shipping Charge</label>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control bg-light border-0" id="cart-subtotal" placeholder="$0.00" readonly />
                                        </div>
                                    </div>
                                    <div class="row mb-2 justify-content-end">
                                        <div class="col-md-3">
                                            <label for="nameInput" class="form-label">Net Amount</label>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control bg-light border-0" id="cart-subtotal" placeholder="$0.00" readonly />
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                        <div class="hstack gap-2 justify-content-end d-print-none mt-4">
                            <button type="submit" class="btn btn-success"><i class="ri-printer-line align-bottom me-1"></i> Save</button>
                            <a href="/" class="btn btn-primary"><i class="ri-download-2-line align-bottom me-1"></i> Download Invoice</a>
                            <a href="/" class="btn btn-danger"><i class="ri-send-plane-fill align-bottom me-1"></i> Send Invoice</a>
                        </div>
                    </div>
                </div>
            </div>

        </div> 
    </>
  )
}

export default SalesEntry