import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import { inputs } from "../utils/constants";

function Create() {
  const [books, setBooks] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://node-backend-wyai.onrender.com/books",
        books
      );
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <>
      <Header1 />
      <div className="flex flex-col justify-center items-center py-6 md:py-16 gap-2 font-mono">
        <h1 className="text-2xl font-bold">Create a Post</h1>
        <div className="w-5/6 md:max-w-5xl bg-slate-100 rounded ">
          <form
            className="w-full flex flex-col justify-center items-center gap-4 p-4"
            autoComplete="off"
          >
            {inputs.map((input, index) => (
              <input
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-400 p-2 rounded"
              />
            ))}
            <textarea
              rows={5}
              type="text"
              placeholder="Description"
              name="desc"
              onChange={handleChange}
              required
              className="w-full border-2 h-60 resize-none border-gray-400 p-2 rounded"
            />

            <div className="w-full flex flex-row justify-end items-end gap-2">
              <button className="h-8 border-2 border-red-500 bg-red-200 text-red-900 p-2 rounded flex items-center">
                <Link to="/">Cancel</Link>
              </button>
              <button
                className="h-8  border-2 border-green-500 bg-green-200 text-green-900 p-2 rounded flex items-center"
                onClick={handleClick}
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
