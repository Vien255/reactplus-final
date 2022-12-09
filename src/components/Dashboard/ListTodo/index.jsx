import { Checkbox } from "antd";
import moment from "moment/moment";
import "./style.scss";

export const ListTodo = ({ listTasks }) => {
  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
  };

  const formaTime = (date) => {
    return moment(date).format("h a");
  };
  return (
    <div className="todo">
      {listTasks?.map((tasks) => (
        <div className="checkbox" key={tasks.id}>
          <Checkbox checked={tasks.completed} onChange={onChange}>
            {tasks.name} at {formaTime(tasks.createdAt)}
          </Checkbox>
        </div>
      ))}
    </div>
  );
};
