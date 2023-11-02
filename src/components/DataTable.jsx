import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../constants/DataSource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const DataTable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    //const fetchData = async () => {
    // let list = [];
    // try {
    //  const querySnapshot = await getDocs(collection(db, "users"));
    //  querySnapshot.forEach((doc) => {
    //    list.push({ id: doc.id, ...doc.data() });
    //   });
    //  setData(list);
    //  console.log(list);
    // } catch (error) {
    //   console.log(error);
    // }
    // };
    //fetchData();

    //REALTIME
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);


  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (error) {
      console.log(error);
    }
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction flex items-center gap-3">
            <Link to="/users/profile" style={{ textDecoration: "none" }}>
              <div className="viewButton rounded border cursor-pointer p-1 text-green-500">View</div>
            </Link>
            <div
              className="deleteButton p-1 rounded text-red-500 border cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const actionRow = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/students/profile" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable h-[80%] p-2 mx-10">
    <div className="datatableTitle w-[100%] mb-10 flex items-center justify-between mt-8 border-green-700">
      Add New Student
      <Link to="/users/new" className="link text-green-400 border rounded p-1 cursor-pointer">
        Add New
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      rows={data}
      columns={userColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
    />
  </div>
  )
}

export default DataTable