//imports all other files we use in the code
//used prettier download on VS code for the entire thing for correct formatting
import "../App.css";
import React from "react";
import Tasks from "./Tasks";
import Header from "./Header";
import { useState } from "react";
import TaskEdit from "./taskEdit";
// import { Container } from "react-bootstrap";
// import { Authprovider } from "./components/contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  const [showTaskedit, showEdit] = useState(false);
  //this const allows it so we can see the task we are editing in the input bars
  const [currentEditableTask, setCurrentEditableTask] = useState({});
  //sets the editable task to the task we chose to edit
  const editTask = (task) => {
    setCurrentEditableTask(task);
    showEdit(true);
  };

  //this assigns the properties to the task, it is checking to see if it edited so it knows to replace the values of task
  //with the new values instead of just submitting a new task on top of it (a bug i had)
  //the else statement is just for new tasks since the edited will not return true
  const onSaveTask = (Ename, te, date, contactInfo, orgName, edited) => {
    if (edited) {
      const taskID = currentEditableTask.id;
      setCurrentEditableTask({});
      tasks.forEach((task) => {
        if (taskID === task.id) {
          task.Ename = Ename;
          task.te = te;
          task.date = date;
          task.contactInfo = contactInfo;
          task.orgName = orgName;
        }
      });
    } else {
      console.log("saving tasks");
      const myNewTaskObj = {
        te: te,
        date: date,
        status: "tbd",
        orgName: orgName,
        contactInfo: contactInfo,
        id: tasks.length + 1,
      };

      //Hide the edit form
      showEdit(false);

      setTasks([myNewTaskObj, ...tasks]);
    }
  };

  //marks the task as complete and sets the status to complete so it can be marked green in task.js
  const completeTask = (cTask) => {
    const cloneTask = tasks;
    cloneTask.forEach((task) => {
      if (task.id === cTask.id) {
        console.log("Task has been completed");
        task.status = "completed";
      }
    });

    setTasks([...cloneTask]);
  };

  const [tasks, setTasks] = useState([]);

  let sortTasks = () => {
    tasks.sort((a, b) => {
      if (a.priority < b.priority) {
        return -1;
      }
      if (a.priority > b.priority) {
        return 1;
      }
      return 0;
    });

    console.log(tasks);

    setTasks([...tasks]);
  };
  return (
    <div>
      <Header></Header>
      <div className="main area">
        <div className="right side">
          <button
            className="menu-button"
            onClick={() => showEdit(!showTaskedit)}
          >
            {!showTaskedit && "New"}
            {showTaskedit && "Hide"}
          </button>
          <button className="menu-button" onClick={() => sortTasks()}>
            Sort
          </button>
        </div>

        {/* calls our task edit, allows us to input things into our task */}
        {showTaskedit && (
          <TaskEdit
            currentEditableTask={currentEditableTask}
            onSaveTask={onSaveTask}
          />
        )}

        <Tasks
          tasks={tasks}
          completeTask={completeTask}
          editTask={editTask}
        ></Tasks>

        {showTaskedit == false && tasks.length == 0 && (
          <h1>Add your first task above!</h1>
        )}
      </div>
    </div>
  );
}

export default HomePage;
