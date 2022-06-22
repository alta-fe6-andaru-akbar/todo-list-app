import { createContext, useEffect, useState } from "react";
import { TodoistApi } from "@doist/todoist-api-typescript";

export const TodoContext = createContext();

const api = new TodoistApi("797ce1d21a1774fe67ea3287a791917168541ad4");
const defaultData = {
  id: 0,
  content: "",
  description: "",
};

export const TodoProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTask] = useState([]);
  const [update, setUpdate] = useState(defaultData);
  const [dataSearch, setDataSearch] = useState([]);
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const handleCreate = (title, description) => {
    api.addTask({
      content: title,
      description,
    });
  };

  const handleDelete = (id) => {
    api.deleteTask(id).then(() => {
      window.alert("berhasil dihapus");
      console.log(id);
    });
  };

  const getDetail = (id) => {
    if (tasks.length === 0) {
      return defaultData;
    }
    const detail = tasks.find((task) => task.id === id);
    return detail;
  };

  const handleUpdate = (id, task) => {
    api
      .updateTask(id, {
        ...task,
      })
      .then(() => window.alert("Berhasil Di Update"));
  };

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      api
        .getTasks()
        .then((data) => {
          setTask(data);
        })
        .catch((error) => console.log(error));
      setLoading(false);
    };

    fetchData();
  }, [tasks]);
  return (
    <TodoContext.Provider
      value={{
        tasks,
        createModal,
        loading,
        updateModal,
        update,
        getDetail,
        setUpdate,
        handleUpdate,
        handleDelete,
        handleCreate,
        setCreateModal,
        setUpdateModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
