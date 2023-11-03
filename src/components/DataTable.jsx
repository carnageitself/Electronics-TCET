import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import Swal from "sweetalert2";
import { userColumns } from '../constants/DataSource';
import { AuthContext } from "../context/AuthContext";

const DataTable = () => {
  const [data, setData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
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
      setData(data.filter((item) => item.id !== id));
      showDelete();
    } catch (err) {
      console.log(err);
    }
  };

  function showDelete() {
    Swal.fire({
      title: "Account Successfully Deleted!",
      text: "",
      icon: "success",
      confirmButtonText: "Okay",
    });
  }

  function deleteConfirmation(id) {
    Swal.fire({
      title: "Delete Account?",
      text:
        "Are you sure you want to delete this account? All of this data will be permanently removed. This action cannot be undone.",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  }

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
              onClick={() => deleteConfirmation(params.row.id)}
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
     {currentUser.admin && <div className="datatableTitle w-[100%] mb-10 flex items-center justify-between mt-8 border-green-700">
       Add New Student
        <Link to="/users/new" className="link text-green-400 border rounded p-1 cursor-pointer">
          Add New
        </Link>
      </div>}
      <DataGrid
        className={currentUser.admin ? "datagrid" : "datagrid mt-20"}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
