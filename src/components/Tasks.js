//creates our actual array of tasks tasks
import Task from "./Task";
function Tasks(props) {
  console.log(props);
  return (
    <div>
      {/* maps our task to our tasks array */}
      {props.tasks.map((task) => {
        return (
          //this task is an object, this is what is being stored in the tasks
          <Task
            key={task.id}
            task={task}
            completeTask={props.completeTask}
            editTask={props.editTask}
          />
        );
      })}
    </div>
  );
}

export default Tasks;
