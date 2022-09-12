import { useState } from "react";
import { useEffect } from "react";
import ShowProduct from "./ShowProduct";
const axios = require("axios");

const Dashboard = () => {
  const [credic, setCredic] = useState({
    title: "",
    liveSite: "",
    category: "All",
  });
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);

  const onchangeInData = (e) => {
    setCredic({ ...credic, [e.target.name]: e.target.value });
  };
  const onchangeInImage = (e) => {
    setFile(e.target.files[0]);
  };

  const addTheame = async (e) => {
    e.preventDefault();
    const { title, liveSite, category } = credic;

    var formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("liveSite", liveSite);
    formData.append("category", category);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const response = await axios.post("/createTheame", formData, config);

    if (response.data.status === 401 || !response.data) {
      console.log("Error");
    } else {
      console.log("Done");
    }
  };

  const allTheam = async () => {
    const response = await axios.get("/findAllTheam", {
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.data.status === 401 || !response.data) {
      console.log("Error");
    } else {
      setData(response.data.theam);
    }
  };
  useEffect(() => {
    allTheam();
  }, []);

  const uniqueList = [
    ...new Set(
      data.map((curEle) => {
        return curEle.category;
      })
    ),
  ];

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
              <select
                id="category"
                onChange={onchangeInData}
                name="category"
                className="category-new-start"
                value={credic.category.value}
              >
                <option>All</option>
                <option>Shashikant</option>
                <option>Webinvation</option>
                {uniqueList.map((cur, index) => {
                  return <option key={index}>{cur}</option>;
                })}
              </select>

              <input
                required
                type="file"
                onChange={onchangeInImage}
                name="image"
                placeholder="Choose Theame"
              />
              <button type="submit">Add Theam</button>
            </form>
          </div>
        </div>
      </div>

      <ShowProduct />
    </>
  );
};

export default Dashboard;
