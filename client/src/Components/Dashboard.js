import { useState } from "react";
const axios = require("axios");

const Dashboard = () => {
  const [credic, setCredic] = useState({
    title: "",
    liveSite: "",
  });
  const [file, setFile] = useState("");

  const onchangeInData = (e) => {
    setCredic({ ...credic, [e.target.name]: e.target.value });
  };
  const onchangeInImage = (e) => {
    setFile(e.target.files[0]);
  };

  const addTheame = async (e) => {
    e.preventDefault();
    const { title, liveSite } = credic;

    var formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("liveSite", liveSite);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const response = await axios.post("/createTheame", formData, config);
    console.log(response);
    
    console.log("Data Submiting");
    console.log("Data Submited");
  };
  return (
    <>
      <div className="dashboard">
        <div className="container">
          <div className="card">
            <form onSubmit={addTheame}>
              <input
                onChange={onchangeInData}
                value={credic.title.value}
                type="text"
                name="title"
                placeholder="Title"
                required
              />
              <input
                onChange={onchangeInData}
                value={credic.liveSite.value}
                type="text"
                name="liveSite"
                placeholder="Path of Live Site"
                required
              />
              <input
                required
                type="file"
                onChange={onchangeInImage}
                name="image"
              />
              <button type="submit">Add Theaam</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
