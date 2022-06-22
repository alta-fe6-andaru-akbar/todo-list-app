import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodoContext } from "../context/TodoIsContext";

const Detail = () => {
  let { tasksId } = useParams();
  const { getDetail } = useContext(TodoContext);
  const navigate = useNavigate();
  const [task, setTask] = useState({
    id: 0,
    content: "",
    description: "",
  });

  useEffect(() => {
    const getData = getDetail(Number(tasksId));
    // console.log(tasksId);
    setTask({
      id: getData.id,
      content: getData.content,
      description: getData.description,
    });
  }, []);

  return (
    <>
      <div className="flex c-detail justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-blue-500 max-w-sm text-white ">
          <h1>Title : {task.content}</h1>
          <p>{task.description}</p>
          <button
            className="p-2 border-2 rounded-md border-blue-200 px-4 place-items-end"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
