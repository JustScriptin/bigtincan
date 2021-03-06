import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { handleOpenModal } from "../../state/modalDucks";
import "./card.scss";
import Modal from "../Modal/Modal";
import { FiMail, FiPhone, FiGlobe } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";

function Card(props) {
  const { imgSrc, userName, email, phone, website, address } = props;
  //const dispatch = useDispatch();
  //const openModal = useSelector((state) => state.modal.openModal);
  const [openModal, setOpenModal] = useState(false);
  const handleDoubleClick = () => {
    //dispatch(handleOpenModal());
    setOpenModal(true);
  };
  const handleClickAway = () => {
    //dispatch(handleOpenModal());
    setOpenModal(false);
  };
  return (
    <div className="cardContainer" onDoubleClick={handleDoubleClick}>
      {openModal && <Modal onClickAway={handleClickAway} />}
      <div className="leftPartOfCard">
        <img src={imgSrc} alt={userName} />
      </div>
      <div className="rightPartOfCard">
        <h1>{userName}</h1>

        <div className="list">
          <div className="listItems">
            <FiMail />
            <p>
              <a href={`mailto:${email}`}>{email}</a>{" "}
            </p>
          </div>
          <div className="listItems">
            <TiContacts />
            <p>
              <a href="http://maps.google.com/?q=Cremin Plains St, Apt.462, North Connortown, 99373">
                {address}
              </a>{" "}
            </p>
          </div>
          <div className="listItems">
            <FiPhone />
            <p>
              <a href={`tel:${+12934148005}`}>{phone}</a>
            </p>
          </div>
          <div className="listItems">
            <FiGlobe />
            <a
              style={{
                display: "block",
                textDecoration: "none",
                color: "#007AE9",
              }}
              href={website}
            >
              {website}
            </a>
          </div>
        </div>
        <div className="companyInfoContainer">
          <svg
            width="68"
            height="41"
            viewBox="0 0 68 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.3304 13.7536L54.3109 4.73411C54.3053 4.72854 54.2993 4.72339 54.2938 4.71782C54.2882 4.71225 54.2815 4.70474 54.2751 4.69831C51.6431 2.06654 48.1732 0.43843 44.4668 0.0960771C40.7605 -0.246276 37.0514 0.718705 33.9816 2.82381C30.9119 0.718705 27.2028 -0.246276 23.4964 0.0960771C19.79 0.43843 16.3202 2.06654 13.6881 4.69831L4.66867 13.7176C1.85854 16.5284 0.19954 20.2875 0.0168627 24.2579C-0.165814 28.2283 1.141 32.1239 3.68115 35.181C6.22132 38.2378 9.81164 40.236 13.7484 40.7835C17.6851 41.3309 21.6845 40.3884 24.9624 38.1405C27.6165 39.9606 30.7591 40.935 33.9771 40.9361C37.1954 40.937 40.3384 39.9642 42.9936 38.1457C46.2676 40.4075 50.2691 41.3631 54.2119 40.8251C58.1547 40.2868 61.7536 38.294 64.302 35.2376C66.8502 32.1811 68.1634 28.2823 67.9837 24.3072C67.8039 20.3318 66.1442 16.5675 63.3304 13.7536ZM20.0647 33.6239C18.0285 34.5964 15.7142 34.8177 13.5306 34.2488C11.3471 33.6801 9.43494 32.3575 8.13211 30.5152C6.82931 28.6729 6.21969 26.4295 6.41105 24.1811C6.60238 21.9328 7.58235 19.8245 9.17776 18.2288L18.197 9.20933C19.5969 7.81125 21.3954 6.88079 23.3453 6.54578C25.2953 6.21078 27.3012 6.48761 29.0873 7.33826L22.7074 13.7176C20.2607 16.1515 18.6768 19.3186 18.197 22.7362C18.0914 23.4834 18.0381 24.2371 18.0375 24.9918C18.0312 27.9754 18.8679 30.9 20.4511 33.4289C20.3234 33.497 20.1946 33.5618 20.0647 33.6233V33.6239ZM40.7461 31.7569C38.9501 33.5412 36.52 34.5405 33.9883 34.5364C31.4566 34.5321 29.0299 33.5245 27.2396 31.7344C25.4496 29.9442 24.4419 27.5175 24.4376 24.9858C24.4336 22.4541 25.4329 20.0241 27.2171 18.2279L33.9816 11.4635L40.7461 18.2279C42.537 20.0234 43.5428 22.4558 43.5428 24.9918C43.5428 27.5276 42.537 29.96 40.7461 31.7554V31.7569ZM58.8206 31.7927C57.4141 33.1957 55.6062 34.1266 53.6473 34.4569C51.6883 34.7872 49.6751 34.5004 47.8864 33.6362C47.7578 33.5742 47.6304 33.5093 47.5046 33.4413C49.0927 30.9096 49.9321 27.9803 49.9257 24.9918C49.9251 24.2371 49.8719 23.4834 49.7662 22.7362C49.2865 19.3186 47.7025 16.1515 45.2559 13.7176L38.9149 7.37685L38.8791 7.34105C40.6645 6.49078 42.6693 6.21376 44.6184 6.54797C46.5675 6.88221 48.3652 7.81131 49.7654 9.20783C49.7718 9.21426 49.7778 9.22112 49.784 9.22755C49.7902 9.23398 49.7956 9.23827 49.8012 9.24384L58.7784 18.2211L58.8213 18.264C60.6152 20.0581 61.6231 22.4914 61.6231 25.0285C61.6231 27.5655 60.6152 29.9988 58.8213 31.7929L58.8206 31.7927Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="18.632"
                y1="40.5211"
                x2="34.1803"
                y2="-2.71468"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#666FCF" />
                <stop offset="1" stop-color="#FF2539" />
              </linearGradient>
            </defs>
          </svg>
          <div className="companyInfo">
            <p>McKenzie LLC</p>
            <p>Quality-focused value-added synergy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
