import Chart from "../components/AttendanceChart"
import List from "../components/MarksTable";

const Single = () => {
  return (
    <div className="single flex flex-col w-full">
        <div className="top flex-6 flex mx-20 mt-10 justify-between gap-10">
          <div className="singleLeft flex flex-col justify-between items-center relative flex-1 shadow-xl w-[100px] h-[400px] gap-2">
            <div className="editButton absolute top-0 right-0 p-1 cursor-pointer">Edit</div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg w-20 h-20 rounded-full object-cover"
                />
                </div>
             <div className="detials flex flex-col border w-full h-full">
             <div className="details mx-5 my-3">
             <div className="detailItem">
                  <span className="itemKey">Name:</span>
                  <span className="itemValue ml-2">Yash Harale</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue ml-2">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue ml-2">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue ml-2">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue ml-2">USA</span>
                </div>
              </div>
             </div>
          </div>
          <div className="singleRight flex flex-1 shadow-xl w-[100px] justify-center h-[400px]">
            <Chart/>
          </div>
        </div>
        <div className="bottom p-5 m-2">
        <h1 className="title mb-5">Academic Records</h1>
          <List/>
        </div>
      </div>
  );
};

export default Single;