import { Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/Done.svg";
import "./style.scss";

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

export const Login = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    navigate("/dashboard");
  };
  return (
    <div className="login">
      <div className="login_img">
        <img src={img} alt="" />
      </div>
      <div className="login_text">
        <div>
          Get’s things done <br /> with TODO
        </div>
        <p>Let’s help you meet up your tasks</p>
      </div>
      <div className="login_form">
        <Form onFinish={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input {...field} placeholder="Enter your email" />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input {...field} type="password" placeholder="Enter password" />
            )}
          />
          <div className="login_btn">
            <button type="submit">Sign In</button>
          </div>
        </Form>
      </div>
      <div className="login_account">
        Already have an account ?<Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};
