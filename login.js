import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
export default function Login() {
  let navigate = useNavigate();
  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();
  const signIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        localStorage.setItem("userEmail", res.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (Response) => {
      if (Response) {
        navigate("/home");
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="google-btn">
      <GoogleButton onClick={signIn} />
    </div>
  );
}
