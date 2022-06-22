import React, { useState, useEffect, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { TodoContext } from "../context/TodoIsContext";

const EditTaskPopup = () => {
  const { updateModal, setUpdateModal, handleUpdate, update, setUpdate } =
    useContext(TodoContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // e.preventDefault();
    if (taskTitle === "" || description === "") {
      window.alert("Title dan Description tidak boleh kosong");
      return;
    }
    handleUpdate(update.id, { content: taskTitle, description });
    setUpdateModal(false);
    setTaskTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTaskTitle(update.content);
    setDescription(update.description);
  }, [update]);

  return (
    <Modal isOpen={updateModal} toggle={setUpdateModal}>
      <ModalHeader toggle={setUpdateModal}>Update Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control mb-3"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              title="taskTitle"
            />
          </div>
          <label>Description</label>
          <div className="form-group">
            <textarea
              rows={5}
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={(e) => setUpdateModal(false)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
