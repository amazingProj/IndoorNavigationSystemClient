import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ManageUsers = (props) => {
  const pressMessage = "לחץ כאן כדי להוסיף  מכשיר חדש";
  const userNameMsg = "הקלד שם המשתמש";
  const macAddressMsg = "הקלד כאן את כתובת ה MAC של המכשיר";
  const requiredField = "חובה למלא כתובת MAC";

  const loading = () => {
    let user = {};
    user["mac"] = "hey";
    user["name"] = "boom";
    axios.post("http://localhost:4001/clients/add", user).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <button
        onClick={loading}
        className="content-center mt-20 mr-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        {pressMessage}
      </button>
      <form className="w-full max-w-lg mt-4 mr-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              {macAddressMsg}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="דוגמא: 94:B9:7E:FA:92:22"
            />
            <p className="text-red-500 text-xs italic">{requiredField}</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              {userNameMsg}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="דוגמא: אסף הלל"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManageUsers;
