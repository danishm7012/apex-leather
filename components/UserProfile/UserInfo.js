import React from "react";
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineContacts,
  AiOutlineEdit,
} from "react-icons/ai";
import { RiUserLocationFill } from "react-icons/ri";

const UserInfo = () => {
  return (
    <div>
      <div className="personal-details p-3 mt-3">
        <h2>Personal Information</h2>
        <hr />
        <ul>
          <li>
            <span className="mr-2">
              <AiOutlineUser />
            </span>
            D-cusa
          </li>
          <li>
            <span className="mr-2">
              <AiOutlineMail />
            </span>
            Infoa@gmial.com
          </li>
          <li>
            <span className="mr-2">
              <AiOutlineContacts />
            </span>
            +23423234232
          </li>
          <li>
            <span className="mr-2">
              <RiUserLocationFill />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </li>
        </ul>
        <br />
        <Link href="">
          <button className="btn btn-1">
            <span className="mr-2">
              <AiOutlineEdit />
            </span>
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
