import React, { useState } from "react";
import styled from "styled-components";
import SignInBtns from "./SignInBtns";
import { useDispatch } from "react-redux";
import { calendarActions } from "../../../store/calendarSlice";

function FormContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [interest, setInterest] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setAnswer("");
    setCheckbox(false);
    setEmail("");
    setInterest("");
    setName("");
  };

  const handleChange = (e) => {
    setCheckbox(!checkbox);
  };

  const handleSlot = (e) => {
    e.preventDefault();
    dispatch(calendarActions.openModal(true));
  };

  return (
    <FormStyle>
      <FormHeader>
        <h1>rsvp now</h1>
      </FormHeader>
      <FormText>
        <p>
          Given the focus of this panel, why do you think you are uniquely
          positioned to provide valuable point? please be specific about vour
          relevant expertise and the perspective that you represent.
        </p>
      </FormText>
      <form>
        <div className="form_div1">
          <div className="input_area less_wide">
            <label>Enter your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input_area less_wide">
            <label>Enter your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form_div2">
          <div className="input_area wide">
            <label>Your Answer</label>
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
          </div>
          <div className="input_area wide interest">
            <label>Conflict of Interest Screening</label>
            <input
              type="text"
              value={interest}
              onChange={(e) => {
                setInterest(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form_div3 check_box">
          <input type="checkbox" onChange={handleChange} />
          <label>
            ** Click here if you are an independent facilitor and would be
            interested in facilitating this knowledgeStream**
          </label>
        </div>
        <div className="form_div4">
          <button style={{ color: "#ff2519" }} onClick={handleSlot}>
            Select Slot
          </button>
          <button type="submit" onClick={handleSubmit} disabled>
            Submit
          </button>
        </div>
      </form>
      <SignInBtns></SignInBtns>
      <FormFooter>
        <p>
          <span>Note:</span> This is like a forum where participants can share
          their opinion on a burning question shared by the sponsor. They can
          post pictures, graphs, detailed arguments to support them.
        </p>
        <p className="para_2">
          No guarantee of payment. Participants will get paid based on their
          contribution. Company will decide how much each contributor earns.
        </p>
      </FormFooter>
    </FormStyle>
  );
}

const FormStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgb(169, 224, 230);
  background: linear-gradient(
    114deg,
    rgba(169, 224, 230, 1) 48%,
    rgba(233, 244, 245, 1) 68%
  );

  form {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .form_div1,
    .form_div2,
    .form_div3 {
      width: 90%;
      height: 32%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .form_div2 {
      width: 94%;
    }

    .form_div4 {
      width: 60%;
      height: 12%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      button {
        text-transform: uppercase;
        padding: 10px 45px;
        font-size: 1.1vw;
        font-weight: 700;
        background-color: #8edae3;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-family: "Poppins", sans-serif;

        :disabled {
          color: #6f8e91;
          background-color: #c0e8eb;
        }
      }
    }

    .input_area {
      height: 100%;
      display: flex;
      flex-direction: column;

      input {
        outline: none;
        border-radius: 40px;
        border: none;
        padding: 10px;
        word-wrap: break-word;
      }

      label {
        font-size: 1.05vw;
      }
    }

    .less_wide {
      width: 45%;
      height: 60%;
      input {
        height: 100%;
      }
      label {
        padding-left: 15px;
        padding-bottom: 5px;
      }
    }

    .wide {
      height: 100%;
      width: 45%;
      padding: 0 10px;

      input {
        height: 100%;
        padding: 0px 10px;
        border-radius: 20px;
      }
      label {
        padding-left: 17px;
        padding-bottom: 5px;
      }
    }

    .interest {
      label {
        padding-left: 15px;
      }
    }

    .check_box {
      width: 70%;
      font-size: 0.8vw;

      input {
        width: 25px;
        height: 25px;
        margin-right: 20px;
      }
    }
  }
`;

const FormHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #ff2519;
`;

const FormText = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormFooter = styled.div`
  width: 95%;
  font-size: 0.7vw;

  span {
    font-weight: 700;
  }

  .para_2 {
    font-weight: 700;
  }
`;

export default FormContent;
