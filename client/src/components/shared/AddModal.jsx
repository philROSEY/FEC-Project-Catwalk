import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';



const AddModal = (props) => {
  const [open, setOpen] = useState(false);
    var body;
  if (props.type === 'verify') {
    body = (
        <div
      style={{
        backgroundColor: "whitesmoke",
        height: "400px",
        width: "600px",
        position: "fixed",
        top: "20%",
        left: "20%",
      }}
    >
      <h2 id="simple-modal-title">{props.title}</h2>
      <h3 id="simple-modal-description">About the {props.prodName}</h3>
      <div>Thank you for your submission! or Please fix your submission if input values are missing or invalid</div>
      </div>
    );
  } else {
      var answerDesc = '';
  if (props.question !== undefined) {
      answerDesc = `${props.prodName}: ${props.question}`;
  }
  else {
      answerDesc = `About the ${props.prodName}`;
  }
  body = (
    <div
      style={{
        backgroundColor: "whitesmoke",
        height: "400px",
        width: "600px",
        position: "fixed",
        top: "10%",
        left: "10%",
      }}
    >
      <h2 id="modal-title">{props.title}</h2>
      <h3 id="modal-description">{answerDesc}</h3>
      <textarea
        style={{ fontSize: "20px", width: '500px', height: '100px' }}
        defaultValue={props.name}
      ></textarea>
      <div>-----------------------</div>
      <label
        style={{ fontSize: "20px", fontWeight: "bold" }}
        htmlFor={"nickname"}
      >
        Nickname*:{" "}
      </label>
      <input
        id={"nickname"}
        style={{
          fontSize: "20px",
        }}
        type="text"
        placeholder="Example: jackson11!"
      ></input>
      <div>For privacy reasons, do not use your full name or email address</div>
      <label style={{ fontSize: "20px", fontWeight: "bold" }} htmlFor={"email"}>
        E-mail*:{" "}
      </label>
      <input
        id={"email"}
        style={{
          fontSize: "20px",
        }}
        type="email"
        maxLength="60"
        placeholder="Why did you like the product or not?"
      ></input>
      <div>For authentication reasons only, you will not be emailed</div>
      <span >
      <AddModal title={"Submit Question"} type={'verify'} />
      </span>
    </div>
  );
}

  var bStyle;
  var buttonText = '';
  if (props.bType === '1') {
      bStyle = {
        textDecoration: "underline",
        border: "none",
        cursor: "pointer",
        background: "none",
      }
      buttonText = 'Add Answer';
  } else if (props.type === 'verify') {
      bStyle = {
        marginTop: '20px',
        marginLeft: '20px',
        borderWidth: '2px',
        fontWeight: 'bold',
        fontSize: '20px',
        borderColor: 'black',
        background: 'none',
      }
      buttonText = 'SUBMIT';
  } else {
      bStyle = {
            marginLeft: '20px',
            borderWidth: '2px',
            fontWeight: 'bold',
            fontSize: '20px',
            borderColor: 'black',
            background: 'none',
            padding: '20px 10px 20px 10px',
            cursor: 'pointer',
          }
          buttonText = 'ADD A QUESTION +'; 
      }
  
  return (
    <span>
      <button style={bStyle} onClick={() => setOpen(!open)}>
        {buttonText}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {body}
      </Modal>
    </span>
  );
};
export default AddModal;