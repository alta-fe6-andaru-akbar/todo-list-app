import React, { useContext, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { TodoContext } from "../context/TodoIsContext";

const CreateTaskPopup = () => {
  const { handleCreate, createModal, setCreateModal } = useContext(TodoContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // e.preventDefault();
    if (taskTitle === "" || description === "") {
      window.alert("Title dan Description tidak boleh kosong");
      return;
    }
    handleCreate(taskTitle, description);
    setCreateModal(false);
    setTaskTitle("");
    setDescription("");
  };
  return (
    <Modal isOpen={createModal} toggle={setCreateModal}>
      <ModalHeader toggle={setCreateModal}>Create Task</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSave}>
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
        <ModalFooter>
          <Button type="submit" color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={() => setCreateModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

export default CreateTaskPopup;
