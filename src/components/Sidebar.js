import React from 'react'
import { Link } from 'react-router-dom';
import sidemenu from '../sidemenu';

const Sidebar = () => {
  return (
    <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
            <a href="/" className="logo logo-dark">
                <span className="logo-sm">
                    <img src="assets/ambion-butterfly.png" alt="" height="40"/>
                </span>
                <span className="logo-lg">
                    <img src="assets/logo.png" alt="" height="45"/>
                </span>
            </a>
            <a href="/" className="logo logo-light">
                <span className="logo-sm">
                    <img src="assets/ambion-butterfly.png" alt="" height="40"/>
                </span>
                <span className="logo-lg">
                    <img src="assets/logo.png" alt="" height="45"/>
                </span>
            </a>
            <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
                id="vertical-hover">
                <i className="ri-record-circle-line"></i>
            </button>
        </div>

        <div id="scrollbar">
            <div className="container-fluid">

                <div id="two-column-menu">
                </div>
                <ul className="navbar-nav" id="navbar-nav">
                    {
                        sidemenu.map((menu)=> {
                            return (
                                <div>       
                                    <li class="menu-title" key={menu.id}><span data-key="t-menu">{menu.title}</span></li>
                                    {
                                        menu.children.map((child) => {
                                            {
                                                if(child.type === 'item') {
                                                    return (
                                                        <li class="nav-item" key={child.id}>
                                                            <a class="nav-link menu-link" href={`#${child.path}`}>
                                                                <i class="ri-dashboard-2-line"></i> <span data-key="t-dashboards">{child.title}</span>
                                                            </a>                                
                                                        </li>
                                                    )
                                                } 
                                                if(child.type === 'collapse') {
                                                    return (
                                                        <li class="nav-item">
                                                            <a class="nav-link menu-link" href={`#${child.title}`} data-bs-toggle="collapse" role="button"
                                                                aria-expanded="false" aria-controls={`${child.title}`}>
                                                                <i class="ri-pages-line"></i> <span data-key="t-pages">{child.title}</span>
                                                            </a>
                                                            <div class="collapse menu-dropdown" id={`${child.title}`}>
                                                                <ul class="nav nav-sm flex-column">
                                                                    {
                                                                        child.children.map ((nestchild)=>{
                                                                            return (
                                                                                <li class="nav-item" key={nestchild.id}>
                                                                                    <Link to={nestchild.path} class="nav-link" data-key="t-starter"> {nestchild.title} </Link>
                                                                                </li>  
                                                                            )
                                                                        })
                                                                    }                                                                                                                                                      
                                                                </ul>
                                                            </div>
                                                        </li>

                                                    )
                                                }       
                                            }
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar