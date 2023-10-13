import React from 'react'
import DataTable from '../components/DataTable'

const Users = () => {
  return (
    <div className="users h-full flex flex-col">
      <div className="bottom">
        <DataTable/>
      </div>
    </div>
  )
}

export default Users