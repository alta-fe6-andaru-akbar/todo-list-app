import React, { useEffect, useState, useContext } from "react";
import CreateTask from "../modal/creatTask";
import CardComponent from "../components/Card";
import { TodoContext } from "../context/TodoIsContext";
import { InputGroup, InputGroupText, Input } from "reactstrap";

const TodoList = () => {
  const { tasks, loading, setCreateModal } = useContext(TodoContext);
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  // const toggle = () => {
  //   setModal(!modal);
  // };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setModal(false);
    setTaskList(taskList);
  };
  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button
          className="btn btn-primary mt-2"
          onClick={() => setCreateModal(true)}
        >
          Create Task
        </button>
      </div>
      <div className="w-full md:w-3/4 mx-auto flex items-center flex-col md:flex-row md:justify-between mt-5">
        <div className="text-center md:text-left">Your Task</div>
        <div className="w-3/4 align-middle md:w-1/4 md:">
          <InputGroup>
            <InputGroupText>
              <i className="fas fa-search"></i>
            </InputGroupText>
            <Input
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
          </InputGroup>
        </div>
      </div>
      <div className="task-container mx-auto flex gap-2 bg-white">
        {loading && <h1>Loading...</h1>}
        {tasks &&
          tasks
            .filter((t) => {
              if (query === "") {
                return t;
              } else if (
                t.content.toLowerCase().includes(query.toLocaleLowerCase())
              ) {
                return t;
              }
            })
            .map((task) => (
              <CardComponent taskObj={task} index={task.id} key={task.id} />
            ))}
      </div>
      <CreateTask save={saveTask} />
    </>
  );
};

export default TodoList;
