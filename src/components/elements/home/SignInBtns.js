import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, authprovider } from "../../../firebase";
import { userActions } from "../../../store/userSlice";

function SignInBtns() {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    signInWithPopup(auth, authprovider)
      .then((result) => {
        dispatch(userActions.setUser(result.user.displayName));
      })
      .catch((error) => alert(error.message));
  };

  return (
    <BtnStyle>
      <button onClick={handleSignIn}>
        <FcGoogle></FcGoogle>
        <h3>Continue with Google</h3>
      </button>
      <button>
        <img src="https://res.cloudinary.com/tyagiashu88/image/upload/v1664816683/icons8-linkedin-circled-480_tlhqvb.svg"></img>
        <h3>Continue with LinkedIn</h3>
      </button>
    </BtnStyle>
  );
}

const BtnStyle = styled.div`
  height: 10%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    background-color: transparent;
    width: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: "Poppins", sans-serif;

    h3 {
      padding-left: 3%;
    }

    svg {
      height: 2.75vw;
      width: 2.75vw;
    }

    img {
      height: 2.75vw;
      width: 2.75vw;
    }
  }
`;

export default SignInBtns;
