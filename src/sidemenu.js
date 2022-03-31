
const sidemenu = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type:'group',
        children:[
            {
                id: 'dashboard',
                title: 'Dashboards',
                type:'item',
                path:"/dashboard",
            }
        ]
    },
    {
        id: 'entry',
        title: 'Entry',
        type: 'group',
        children: [
            {
                id: 'ledger',
                title: 'Ledger',
                type: 'collapse',
                icon:"menu-icon fa fa-cogs",
                path:'/ledger',
                children: [
                    {
                        id: 'ledgerlist',
                        title: 'Ledger List',
                        type: 'item',
                        icon:"fa fa-puzzle-piece",
                        path:"/ledger/list",
                    },
                    {
                        id: 'ledgercreate',
                        title: 'Ledger Create',
                        type: 'item',
                        path:"/ledger/create",
                    },
                    {
                        id: 'ledgeradd',
                        title: 'Ledger Add',
                        type: 'item',
                        path:"/ledger/add",
                    }
                ]
            },
            {
                id: 'sales',
                title: 'Sales',
                type: 'collapse',
                icon:"menu-icon fa fa-cogs",
                path:'/sales',
                children: [
                    {
                        id: 'saleslist',
                        title: 'Sales List',
                        type: 'item',
                        icon:"fa fa-puzzle-piece",
                        path:"/sales/saleslist",
                    },
                    {
                        id: 'salesorder',
                        title: 'Sales Order',
                        type: 'item',
                        path:"/sales/salesorder",
                    },
                    {
                        id: 'salesreturn',
                        title: 'Sales Return',
                        type: 'item',
                        path:"/sales/salesreturn",
                    }
                ]
            },
            {
                id: 'purchase',
                title: 'Purchase',
                type: 'collapse',
                icon:"menu-icon fa fa-cogs",
                path:'/purchase',
                children: [
                    {
                        id: 'purchaselist',
                        title: 'Purchase List',
                        type: 'item',
                        icon:"fa fa-puzzle-piece",
                        path:"/purchase/purchaselist",
                    },
                    {
                        id: 'purchaseorder',
                        title: 'Purchase Order',
                        type: 'item',
                        path:"/purchase/purchaseorder",
                    },
                    {
                        id: 'purchasereturn',
                        title: 'Purchase Return',
                        type: 'item',
                        path:"/purchase/purchasereturn",
                    }
                ]
            }

    
        ]
        
    }
]


export default sidemenu