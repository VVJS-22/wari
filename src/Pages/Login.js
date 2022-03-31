import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth-page-wrapper pt-5">
    <div className="auth-one-bg-position auth-one-bg"  id="auth-particles">
        <div className="bg-overlay"></div>
        
        <div className="shape">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
            </svg>
        </div>
    </div>

    <div className="auth-page-content">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center mt-sm-5 mb-4 text-white-50">
                        <div>
                            <a href="index.html" className="d-inline-block auth-logo">
                                <img src="assets/images/logo-light.png" alt="" height="20"/>
                            </a>
                        </div>
                        <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card mt-4">
                    
                        <div className="card-body p-4"> 
                            <div className="text-center mt-2">
                                <h5 className="text-primary">Have A Nice Day !</h5>
                                <p className="text-muted">Sign in to continue to Wari-Fabric.</p>
                            </div>
                            <div className="p-2 mt-4">
                                <form action="https://themesbrand.com/velzon/html/default/index.html">
    
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                                    </div>
            
                                    <div className="mb-3">                                        
                                        <label className="form-label" for="password-input">Password</label>
                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                            <input type="password" className="form-control pe-5" placeholder="Enter password" id="password-input"/>
                                            <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                        </div>
                                    </div>
                                  
                                    <div className="mt-4">
                                        <Link to='/'>
                                            <button className="btn btn-success w-100" type="submit">Sign In</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <p className="mb-0 text-muted">&copy; <script>document.write(new Date().getFullYear())</script> Ambion. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Login