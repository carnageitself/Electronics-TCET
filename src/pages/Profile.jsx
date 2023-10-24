import AcademicTable from "../components/AcademicTable";
import Chart from "../components/AttendanceChart"
import List from "../components/MarksTable";
import CreateIcon from '@mui/icons-material/Create';
import { userData } from "../constants/MarksSource";

const Profile = () => {

  const user = userData[0]

  return (
    <div className="single flex flex-col w-full">
        <div className="top flex-6 flex mx-20 mt-10 justify-between gap-10">
          <div className="singleLeft flex flex-col justify-between items-center relative flex-1 shadow-xl w-[100px] h-[400px] gap-2">
            <div className="editButton absolute top-0 right-0 p-1 cursor-pointer text-gray-500"><CreateIcon/></div>
            <div className="item">
              <img
                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                alt=""
                className="itemImg w-20 h-20 rounded-full object-cover"
                />
                </div>
             <div className="detials flex flex-col w-full h-full">
             <div className="details mx-5 my-3">
             <div className="detailItem mb-1">
                  <span className="itemKey font-title text-lg">Name:</span>
                  <span className="itemValue ml-2 text-base">{user.name}</span>
                </div>
                <div className="detailItem mb-1">
                  <span className="itemKey font-title text-lg">Address:</span>
                  <span className="itemValue ml-2 text-base">
                    {user.address}
                  </span>
                </div>
                <div className="detailItem mb-1">
                  <span className="itemKey font-title text-lg">Email:</span>
                  <span className="itemValue ml-2 text-base">{user.email}</span>
                </div>
                <div className="detailItem mb-1">
                  <span className="itemKey font-title text-lg">Contact No:</span>
                  <span className="itemValue ml-2 text-base">{user.contactno}</span>
                </div>
               
                <div className="detailItem mb-1">
                  <span className="itemKey font-title text-lg">Father's Name:</span>
                  <span className="itemValue ml-2 text-base">{user.fatheremail}</span>
                </div>
                <div className="detailItem mb-1">
                  <span className="itemKey font-title text-lg">Occupation:</span>
                  <span className="itemValue ml-2 text-base">{user.occupation}</span>
                </div>
                <div className="detailItem mb-1">
                  <span className="itemKey font-title text-lg">Telephone No:</span>
                  <span className="itemValue ml-2 text-base">{user.telephoneno}</span>
                </div>
                <div className="detailItem mb-1">
                  <span className="itemKey font-title text-lg">Email:</span>
                  <span className="itemValue ml-2 text-base">{user.fatheremail}</span>
                </div>
              </div>
             </div>
          </div>
          <div className="singleRight flex flex-1 shadow-xl w-[100px] justify-center h-[400px]">
            <Chart/>
          </div>
        </div>
        <div className="bottom p-5 m-2">
        <h1 className="title mb-5 gap-5">Academic Records</h1>
          <AcademicTable/>
          <List/>
        </div>
      </div>
  );
};

export default Profile;