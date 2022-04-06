import React from 'react';

const Dashboard = React.lazy(() => import('./Views/Dashboard'))
const LedgerList = React.lazy(() => import('./Views/Ledger/LedgerList') )
const LedgerCreate = React.lazy(()=> import('./Views/Ledger/LedgerCreate'))
const SalesEntry = React.lazy(()=> import('./Views/Sales/SalesEntry'))
const AddCustomer = React.lazy(()=> import('./Views/AddCustomer'))
const LedgerAdd = React.lazy(()=> import('./Views/Ledger/LedgerAdd'))


const routes = [
    {
        path:"/",
        component:Dashboard,
        name:"Dashboard",
        exact:true
    },
    {
        path:"/dashboard",
        component:Dashboard,
        name:"Dashboard",
        exact:true
    },
    {
        path:"/ledger",
        component:LedgerList,
        name:'Ledger',
        exact:true
    },
    {
        path:"/ledger/create",
        component:AddCustomer,
        name:'AddCustomer',
    },
    {
        path:"/ledger/list",
        component:LedgerList,
        name:"LedgerList"
        
    },
    {
        path:'/ledger/add',
        component:LedgerAdd,
        name:'LedgerAdd'
    },
    {
        path:"sales",
        component:SalesEntry,
        name:'SalesEntry',
        exact:true    
    },
    {
        path:"/sales/saleslist",
        component:SalesEntry,
        name:'SalesList'
    },

]

export default routes