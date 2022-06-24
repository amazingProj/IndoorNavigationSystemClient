import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./style/users.css";

const ManageUsers = (props) => {
  const pressMessage = "לחץ כאן כדי להוסיף  מכשיר חדש";
  const userNameMsg = "הקלד שם המשתמש";
  const macAddressMsg = "הקלד כאן את כתובת ה MAC של המכשיר";
  const requiredField = "חובה למלא כתובת MAC";
  const mac = useRef();
  const name = useRef();
  var [clients, setClients] = useState([]);
  const [valid, setValid] = useState(false);
  const MINUTE_MS = 60000;
  const deleteMsg = "מחיקה";
  const renameMsg = "שנה שם";
  const rename = useRef();

  const renameClient = (id, client) => {
    client.name = rename.current.value;
    axios
      .post("http://localhost:4001/clients/update/" + id, client)
      .then((res) => console.log(res.data));
    setValid(false);
  };

  const deleteClient = (id) => {
    console.log("crash");

    console.log(id);
    axios
      .delete("http://localhost:4001/clients/" + id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error.response));
    setValid(false);
  };

  const loading = () => {
    let user = {};
    user["mac"] = mac.current.value;
    user["name"] = name.current.value;
    axios.post("http://localhost:4001/clients/add", user).then((res) => {
      console.log(res.data);
    });
    setValid(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Logs every minute");
      setValid(false);
    }, MINUTE_MS);

    if (!valid) {
      axios.get("http://localhost:4001/clients").then((res) => {
        let data = res.data;
        console.log(data);
        setClients(data);
        setValid(true);
      });
    }

    return () => clearInterval(interval);
  });

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
              ref={mac}
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
              ref={name}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="דוגמא: אסף הלל"
            />
          </div>
        </div>
      </form>
      <div className="list-none container">
        {clients.map((client) => (
          <div key={client._id} className="item">
            <div>
              <div className="flex items-stretch">
                <li className="large-font">
                  <input
                    ref={rename}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder={client.name}
                  />
                  <br />
                  <button
                    onClick={() => {
                      renameClient(client._id, client);
                    }}
                  >
                    {renameMsg}
                  </button>
                </li>
              </div>
              <div className="large-font">
                <pre>כתובת ה MAC היא</pre>
                {client.mac}
              </div>
              <button
                onClick={() => {
                  deleteClient(client._id);
                }}
                className="font"
              >
                {deleteMsg}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
