import "./style.css";
import TodoWrapper from "./TodoWrapper";
import myImage from "../assets/pexels-karolina-grabowska-5208353.jpg"
const Container = () => {
  return (
    <div className="Con"  style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}>
      <TodoWrapper></TodoWrapper>
    </div>
  );
};

export default Container;
