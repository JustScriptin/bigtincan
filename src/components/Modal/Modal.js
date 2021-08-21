import React, { useState } from "react";
import Axios from "axios";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import "./modal.scss";

function Modal(props) {
  const [data, setData] = useState({
    imgSrc: "",
    email: "",
    userName: "",
    address: "",
    phone: "",
    website: "",
  });
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.put(url, {
      imgSrc: data.imgSrc,
      email: data.email,
      userName: data.userName,
      address: data.address,
      phone: data.phone,
      website: data.website,
    }).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <ClickAwayListener onClickAway={props.onClickAway}>
      <div className="modalContainer">
        <form className="modalForm" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              id="imgSrc"
              placeholder="Edit Photo"
              type="text"
              name="editImgSrc"
              value={data.imgSrc}
              onChange={(e) => handleInput(e)}
            />
            <input
              id="email"
              placeholder="Edit Email"
              type="text"
              name="editEmail"
              value={data.email}
              onChange={(e) => handleInput(e)}
            />
            <input
              id="userName"
              placeholder="Edit Name"
              type="text"
              name="editUserName"
              value={data.userName}
              onChange={(e) => handleInput(e)}
            />
            <input
              id="address"
              placeholder="Edit Address"
              type="text"
              name="editAddress"
              value={data.address}
              onChange={(e) => handleInput(e)}
            />
            <input
              id="phone"
              placeholder="Edit Phone"
              type="number"
              name="editPhone"
              value={data.phone}
              onChange={(e) => handleInput(e)}
            />
            <input
              id="website"
              placeholder="Edit Website"
              type="text"
              name="editWebsite"
              value={data.website}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </ClickAwayListener>
  );
}

export default Modal;
