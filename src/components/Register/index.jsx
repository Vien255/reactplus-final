import { Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/Done.svg";
import { autheService } from "../../service";
import * as yup from "yup";
import "./style.scss";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().required().email(),
    name: yup.string().required(),
    password: yup.string().required(),
    confirmpassword: yup.string().required(),
  })
  .required();

export const Register = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    if (data.password === data.confirmpassword) {
      await autheService.register({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      navigate("/login");
    }
  };
  return (
    <div className="register">
      <div className="register_img">
        <img src={img} alt="" />
      </div>
      <div className="register_text">
        <div>
          Get’s things done <br /> with TODO
        </div>
        <p>Let’s help you meet up your tasks</p>
      </div>
      <div className="register_form">
        <Form onFinish={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter your full name"
                status={errors.name && "error"}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter your email"
                status={errors.email && "error"}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                placeholder="Enter password"
                status={errors.password && "error"}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmpassword"
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                placeholder="Confirm Password"
                status={errors.confirmpassword && "error"}
              />
            )}
          />
          <div className="register_btn">
            <button type="submit">Register</button>
          </div>
        </Form>
      </div>
      <div className="register_account">
        Already have an account ? <Link to="/login"> Sign In</Link>
      </div>
    </div>
  );
};
