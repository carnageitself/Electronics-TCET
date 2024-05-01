import AcademicTable from "../components/AcademicTable";
import Chart from "../components/AttendanceChart";
import List from "../components/MarksTable";
import CreateIcon from "@mui/icons-material/Create";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DropDOwn from "../components/Dropdown";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  console.log(id);
  useEffect(() => {
    const unsub = async () => {
      const userDocRef = doc(db, "users", id);
      const docSnapshot = await getDoc(userDocRef);
      setUser(docSnapshot);
    };
    unsub();
  }, [id]);

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="single flex flex-col w-full">
      <div className="top flex-6 flex mx-20 mt-10 justify-between gap-10">
        <div className="singleLeft flex flex-col justify-between items-center relative flex-1 rounded-lg border w-[100px] h-[400px] gap-2">
          {currentUser.admin && (
            <div className="editButton absolute top-1 bg-slate-50 right-1 p-1 cursor-pointer text-gray-500 border rounded-full">
              <Link to="/users/new">
                <CreateIcon />
              </Link>
            </div>
          )}
          <div className="item mt-5">
            <img
              src={currentUser?.img}
              alt=""
              className="itemImg w-20 h-20 rounded-full object-cover ring-2 ring-slate-300 p-[1px]"
            />
          </div>
          <div className="detials flex flex-col w-full h-full">
            <div className="details mx-5 my-3">
              <div className="detailItem mb-1">
                <span className="itemKey font-title text-lg">Name:</span>
                <span className="itemValue ml-2 text-base">{currentUser?.name}</span>
              </div>
              <div className="detailItem mb-1">
                <span className="itemKey font-title text-lg">Address:</span>
                <span className="itemValue ml-2 text-base">
                  {currentUser?.address}
                </span>
              </div>
              <div className="detailItem mb-1">
                <span className="itemKey font-title text-lg">Email:</span>
                <span className="itemValue ml-2 text-base">{currentUser?.email}</span>
              </div>
              <div className="detailItem mb-1">
                <span className="itemKey font-title text-lg">Contact No:</span>
                <span className="itemValue ml-2 text-base">
                  {currentUser?.contact}
                </span>
              </div>

              <div className="detailItem mb-1">
                <span className="itemKey font-title text-lg">
                  Father's Name:
                </span>
                <span className="itemValue ml-2 text-base">
                  {currentUser?.fathersname}
                </span>
              </div>
              <div className="detailItem mb-1">
                <span className="itemKey font-title text-lg">Occupation:</span>
                <span className="itemValue ml-2 text-base">
                  {currentUser?.fathersoccupation}
                </span>
              </div>
              <div className="detailItem mb-1">
                <span className="itemKey font-title text-lg">
                  Telephone No:
                </span>
                <span className="itemValue ml-2 text-base">
                  {currentUser?.telephone}
                </span>
              </div>
              <div className="detailItem mb-1">
                <span className="itemKey font-title text-lg">
                  Father's Email:
                </span>
                <span className="itemValue ml-2 text-base">
                  {currentUser?.fathersemail}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="singleRight flex flex-1 border rounded-lg w-[100px] justify-center h-[400px]">
          <Chart />
        </div>
      </div>
      <div className="bottom p-5 m-3">
        <div className="title my-5 mx-12 flex justify-between items-center">
          <h1 className="border p-2 text-xl rounded">Academic Transcripts</h1>
          <a href="mailto:1032201286@tcetmumbai.in" className="p-2 px-2 text-red-500 font-semibold border rounded items-center cursor-pointer flex gap-2 redbg">Report<ErrorOutlineIcon/></a>
          {/* <DropDOwn/> */}
        </div>
        <AcademicTable />
        <List />
      </div>
    </div>
  );
};

export default Profile;
