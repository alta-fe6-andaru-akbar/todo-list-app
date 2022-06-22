import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoIsContext";
import { useNavigate } from "react-router-dom";

import EditTask from "../modal/EditTask";

const CardComponent = ({ taskObj, index }) => {
  const { setUpdateModal, handleDelete, setUpdate, setDetail } =
    useContext(TodoContext);
  let navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  console.log(taskObj);

  return (
    <div class="card-wrapper">
      <div
        class="card-top"
        style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            "background-color": colors[index % 5].secondaryColor,
            "border-radius": "10px",
          }}
        >
          {taskObj.content.slice(0, 25)}
        </span>
        <p className="mt-3">{taskObj.description}</p>

        {/* <div style={{ position: "absolute", right: "20px", bottom: "20px" }}> */}
        <div className="absolute right-5 bottom-5 flex flex-col md:flex-row">
          <span
            className="px-4 py-1 mr-4 text-sm bg-blue-500 rounded-full cursor-pointer text-white"
            onClick={() => navigate(`/detail/${taskObj.id}`)}
          >
            <small className="mr-4">Detail</small>
            <i className="fas fa-info"></i>
          </span>
          <div className="text-center">
            <i
              class="far fa-edit mr-4"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={() => {
                setUpdate({
                  id: taskObj.id,
                  content: taskObj.content,
                  description: taskObj.description,
                });
                setUpdateModal(true);
              }}
            ></i>
            <i
              class="far fa-trash-alt"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={() => handleDelete(taskObj.id)}
            ></i>
          </div>
        </div>
      </div>
      <EditTask task={taskObj} />
    </div>
  );
};

export default CardComponent;
