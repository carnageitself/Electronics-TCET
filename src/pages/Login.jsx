import logo from "../assets/tcet.png";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button, Input } from "@material-tailwind/react";
import ReCAPTCHA from "react-google-recaptcha";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(VisibilityOutlinedIcon);
  const [active, setActive] = useState(false)

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(VisibilityOffOutlinedIcon);
      setType('text');
    } else {
      setIcon(VisibilityOutlinedIcon);
      setType('password');
    }
  }

  const devkey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const sitekey = "6LdJHXspAAAAAEwPg-XFQ5N7cyIVUqOQseDrKpYC"

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showSuccess();
      // Successfully signed in, navigate to the desired page
      navigate("/");
    } catch (error) {
      // Handle authentication errors here
      setError(true);
      console.error(error);
      showAlert(error.message);
    }
  };

  function showAlert(errorMessage) {
    Swal.fire({
      title: errorMessage,
      text: "Please try again!",
      icon: "error",
      confirmButtonText: "Okay",
    });
  }

  function showSuccess() {
    Swal.fire({
      title: "Succesfully Logged in",
      text: "",
      icon: "success",
      confirmButtonText: "Okay",
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <img className="mx-auto w-32 h-32" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9  text-[#DC6803]">
            Thakur College of Engineering & Technology
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleLogin}
          >
            <div>
              <div className="mt-2">
                <Input
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <Input
                  label="Password"
                  id="password"
                  name="password"
                  type={type}
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          <div className="flex justify-between w-full text-black items-center">
          <div>
         <div className="flex" onClick={handleToggle}>
         <Checkbox icon={<VisibilityOffOutlinedIcon />} checkedIcon={<VisibilityOutlinedIcon />} checked={type === 'text'} />
         </div>
          </div>
          <a href="mailto:1032201286@tcetmumbai.in" className="text-sm font-semibold leading-6  text-indigo-600 hover:text-indigo-500 cursor-pointer">
            Forgot Password?
          </a>
          </div>
           
            {/* <div className="flex items-center justify-end">
              <div className="text-sm">
                <a className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  Forgot password?
                </a>
              </div>
            </div> */}
            <div className="flex items-center justify-center">
            <ReCAPTCHA sitekey={devkey} onChange={(value)=>setCaptcha(!!value)}/>
            </div>
            <div>
              <Button
                type="submit"
                disabled={!captcha}
                className="flex w-full justify-center rounded-md  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </Button>
              {error && <span className="text-red-500 font-normal"></span>}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member ?{" "}
            <Link to="">
              <a href="mailto:1032201286@tcetmumbai.in" className="font-semibold leading-6  text-indigo-600 hover:text-indigo-500 cursor-pointer">
                Contact respective co-ordinators.
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
