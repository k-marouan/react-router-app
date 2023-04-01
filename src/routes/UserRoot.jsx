import { Link, Outlet, useNavigate } from "react-router-dom";

const UserRoot = () => {
  const userId = 75;
  const navigate = useNavigate();

  const logOutHandler = () => {
    navigate("/", { replace: true }); 
  }
  return (
    <div className="wrapper2">
      <div className="nav">
        <ul>
          <li>
            <Link to="info">Info</Link>
          </li>
          <li>
            <Link to={`${userId}/edit`}>Edit</Link>
          </li>
          <li onClick={ logOutHandler }>Logout</li>
        </ul>
      </div>
      <div className="content"><Outlet/></div>
    </div>
  );
};

export default UserRoot;