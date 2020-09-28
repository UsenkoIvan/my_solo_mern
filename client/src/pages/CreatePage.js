import React, { useState, useEffect, useContext } from "react";
const { useHistory } = require("react-router-dom");
const { useHttp } = require("../hooks/http.hook");
const { AuthContext } = require("../context/AuthContext");

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const pressHandler = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          {
            from: link,
          },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );

        history.push(`/detail/${data.link._id}`);
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field ">
          <input
            placeholder="Insert link"
            id="link"
            type="text"
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={pressHandler}
            value={link}
          />
          <label htmlFor="link">Enter link</label>
        </div>
      </div>
    </div>
  );
};
