import React from 'react'
import DataTable from '../components/DataTable'

const Users = () => {
  return (
    <div className="users h-full flex flex-col">
      <div className="top mt-10 mx-10 flex gap-10 justify-center items-center text-xl">
        <div className="students cursor-pointer">Students</div>
        <div className="teachers cursor-pointer">Teachers</div>
        <div className="staffs cursor-pointer">Staffs</div>
      </div>
      <div className="bottom">
        <DataTable/>
      </div>
    </div>
  )
}

export default Users