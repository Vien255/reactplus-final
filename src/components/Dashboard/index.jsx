import { ClockCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/images/Group 4.svg";
import clock from "../../assets/images/Group 7.svg";
import { tasksService } from "../../service";
import { ListTodo } from "./ListTodo";

import "./style.scss";

export const Dashboard = () => {
  const [listTasks, setListTasks] = useState([]);

  useEffect(() => {
    responstTasks();
  }, []);

  const responstTasks = async () => {
    const res = await tasksService.tasks();
    setListTasks(res);
  };

  return (
    <div className="dashboard">
      <div className="dashboard_user">
        <img src={user} alt="" />
        <div className="dashboard_user_info">
          <div className="dashboard_name">Monica Gamage</div>
          <p>@monicagamage</p>
          <Link to="/login">
            <button>Log Out</button>
          </Link>
        </div>
      </div>
      <div className="dashboard_clock">
        <img src={clock} alt="" />
      </div>
      <div className="dashboard_tasks">
        <p>Tasks List</p>
        <div className="dashboard_tasks_todo">
          <div className="scroll">
            <p>Tasks List</p>
            <div className="add">
              <PlusCircleOutlined style={{ color: "#F4C27F" }} />
            </div>
            <div className="title">
              <ClockCircleOutlined /> Cook Rice and Chicken at 10 am
              <ListTodo listTasks={listTasks} />
            </div>
          </div>
          <div className="listtodo"></div>
        </div>
      </div>
    </div>
  );
};
