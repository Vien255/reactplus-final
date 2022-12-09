import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./style.scss";

export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome_img"></div>
      <div className="welcome_content">
        <div>
          Welcome to <br /> OUR REMINDER
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
        </p>
      </div>
      <div className="welcome_btn">
        <Link to="/register">
          <button>
            Get Start <ArrowRightOutlined />
          </button>
        </Link>
      </div>
    </div>
  );
};
