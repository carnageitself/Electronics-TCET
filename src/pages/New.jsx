
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const New = ({ inputs }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(data);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1);
      showAdd()
    } catch (error) {
      console.log(error);
      showAlert(error.message)
    }
  };

  function showAdd() {
    Swal.fire({
      title: "Account Successfully Added!",
      text: "",
      icon: "success",
      confirmButtonText: "Okay",
    });
  }

  function showAlert(errorMessage) {
    Swal.fire({
      title: errorMessage,
      text: 'Please try again!',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
  }

  return (
    <div className="new w-full h-full my-10">

      <div className="newContainer flex flex-col border rounded-xl mx-10">
      
      

          <div className="top flex justify-center items-center">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="w-32 h-32 rounded-full my-3"
            />
          </div>
          <div className="bottom flex flex-1 my-5 flex-col">
            <form onSubmit={handleAdd} className="flex flex-col">
              <div className="formInput grid grid-cols-3 gap-8 mx-20">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon text-gray-500 cursor-pointer" />
                </label>
                <input
                
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}:</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                    className="ml-2 bg-transparent"
                    />
                </div>
              ))}
              </div>
             <div className="flex justify-center items-center mt-10">
             <button disabled={per !== null && per < 100} type="submit" className="bg-green-500 px-4 py-2 rounded-lg" onSubmit={handleAdd}>
                Send
              </button>
             </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default New;
