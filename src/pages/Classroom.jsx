import React, { useContext, useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AddIcon from "@mui/icons-material/Add";
import bg from "../../src/assets/school.jpg";
import yash from "../../src/assets/yash2.jpg";
import Modal from "@mui/material/Modal";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Classroom = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const { currentUser } = useContext(AuthContext);

  const project = [
    {
      id: 1,
      title: "RTOS_AY_23_24_EVEN",
      desc: "",
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "purple-text-gradient",
        },
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      id: 2,
      title: "PS VIII - AY 2023-24 EVEN SEM 8",
      desc: "",
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "purple-text-gradient",
        },
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      id: 3,
      title: "Project Management- Jan to Jun 2024",
      desc: "BE Sem VIII Open Elective",
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "purple-text-gradient",
        },
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      id: 4,
      title: "BE ELEX (AY:2023-24)",
      desc: "Outhouse Internship",
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "purple-text-gradient",
        },
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      id: 5,
      title: "Digital Business Management",
      desc: "BE E&TC (29), E&CS (23), AIML (11). IoT (18)",
      profile: yash,
    },
  ];

  return (
    <div className="classroom h-full w-full">
      <div className="head flex justify-between m-10">
        <div className="left">
          <h1 className="border p-2 text-xl rounded">Classroom</h1>
        </div>
        <div className="right flex gap-2">
          <button
            className="p-2 px-2 text-green-500 font-semibold border rounded items-center cursor-pointer flex gap-2 greenbg border-green-300"
            onClick={handleOpen} // Toggle modal
          >
            <EditNoteIcon />
            Create
          </button>
          {open && (
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="h-96 w-96 flex justify-center items-center z-50">
                  <Card className="bg-white rounded-lg w-full shadow-2xl border border-gray-400">
                    <CardHeader
                      variant="gradient"
                      color="blue"
                      className="mb-4 grid h-28 place-items-center"
                    >
                      <Typography variant="h3" color="white">
                        Create Classroom
                      </Typography>
                    </CardHeader>

                    <div className="p-3">
                      <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div className="flex items-center gap-3">
                          
                          <Input
                            label="Add title"
                            type="text"
                            name="title"
                            // value={title}
                            required
                            className="pt-3 "
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>

                        <div className="flex items-center gap-3">
                         
                          <Input
                            label="Add a description"
                            type="text"
                            name="description"
                            // value={description}
                            required
                            className="pt-3"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          
                          <Input
                            label="Add subject"
                            type="text"
                            name="subject"
                            // value={description}
                            required
                            className="pt-3"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center gap-3">
                      
                          <Input
                            label="Add room"
                            type="text"
                            name="room"
                            // value={description}
                            required
                            className="pt-3"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                    
                      </div>
                    </div>
                    <CardFooter className="flex justify-between border-t p-3 mt-5">
                     
                      <Button
                        type="submit"
                        // onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                      >
                        Create
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </Modal>
            </div>
          )}{" "}
          
          <button
            className="p-2 px-2 text-green-500 font-semibold border rounded items-center cursor-pointer flex gap-2 greenbg border-green-300"
            onClick={handleOpen2}
          >
            <AddIcon />
            Join
          </button>
          {open2 && (
            <div>
              <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="h-96 w-96 flex justify-center items-center z-50">
                  <Card className="bg-white rounded-lg w-full shadow-2xl border border-gray-400">
                    <CardHeader
                      variant="gradient"
                      color="blue"
                      className="mb-4 grid h-28 place-items-center"
                    >
                      <Typography variant="h3" color="white">
                        Join Classroom
                      </Typography>
                    </CardHeader>
                    <div className="flex flex-col mx-3 p-1">
                      <h1 className="">You are currently signed in as</h1>
                      <div className="flex justify-between my-4">
                        <div className="left flex items-center gap-2 justify-center">
                          <img src={currentUser.img} alt="img" className="object-contain h-12 w-12 rounded-full object-center cursor-pointer"/>
                          <div className="">
                            <h1 className="text-sm text-black">{currentUser.name}</h1>
                            <h1 className="text-sm text-black">{currentUser.email}</h1>
                          </div>
                        </div>
                        <Link to="/login">
                        <div className="right p-3 px-2 text-blue-500 font-semibold border border-blue-800 rounded items-center cursor-pointer flex gap-2 bluebg text-sm">
                          Switch Account
                        </div>
                        </Link>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div className="flex items-center gap-3">
                          
                          <Input
                            label="Class Code"
                            type="text"
                            name="title"
                            // value={title}
                            required
                            className="pt-3 "
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>

                        <div className="flex items-center gap-3">
                         
                          <Input
                            label="Owner's Email"
                            type="text"
                            name="description"
                            // value={description}
                            required
                            className="pt-3"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>

                    
                      </div>
                    </div>
                    <CardFooter className="flex justify-between border-t p-3 mt-5">
                     
                      <Button
                        type="submit"
                        // onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                      >
                        Join
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </Modal>
            </div>
          )}
        </div>
      </div>

      <div className="rooms">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mx-10 mb-20">
          {project.map((project) => (
            <div key={project.id}>
              <div className="inter-var" key={project.id}>
                <div className="relative group/card bg-slate-100 w-auto sm:w-[30rem] h-96 rounded-xl border border-black/10 cursor-pointer">
                  <div className="w-full">
                    <img
                      src={bg}
                      className="h-36 w-full object-cover rounded-t-xl top-0"
                      alt="image not found :("
                    />
                  </div>
                  <div className="text-xl font-bold text-neutral-600 dark:text-white mt-4 flex items-center w-full justify-between relative px-5">
                    <img
                      src={project.profile}
                      className="object-cover absolute h-24 w-24 rounded-full object-center -top-16 right-5 cursor-pointer"
                      alt="image not found :("
                    />
                    <div className="flex items-center w-[80%] relative">
                      <h1 className="truncate uppercase hover:underline-offset-2 hover:underline">
                        {project.title}
                      </h1>

                      {/* <Image src={yash} alt="" width="32" height="32" className=""/> */}
                    </div>
                  </div>
                  <h1 className="text-base ml-5">{project.desc}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CreateModal = () => {
  return "";
};

export default Classroom;
