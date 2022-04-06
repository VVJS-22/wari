import React from 'react'
import AppBreadcrumb from '../../components/AppBreadcrumb'

const LedgerCreate = () => {

  const breads = [
    {
        class: 'breadcrumb-item',
        redirect: '/',
        name: 'Ledger'
    },
    {
        class: 'breadcrumb-item active',
        redirect: '#',
        name: 'LedgerList'
    }
]
  return (
    <>
    <AppBreadcrumb breads={breads} />
    <div>LedgerCreate</div>
    </>
  )
}

export default LedgerCreate