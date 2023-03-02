import { useSelector, useDispatch } from "react-redux";
import { slice } from "../store/store";
import classes from "../index.module.css";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


export const Display = () => {
const userLogin = useSelector((state) => state.loginStatus.userLogin);
const navigate = useNavigate();
const dispatch = useDispatch();
const handleLogout = () => {
    dispatch(slice.actions.setLoginState(false));
    navigate('/')
    localStorage.removeItem("loginStatus");
  };
  
    return (<><>
        <div className={classes.App}>
          <div className={classes.header}>
            Aviation{" "}
            <span>
              {userLogin ? (
                <>
                  <button
                    variant="outlined"
                    className={classes.buttonLogin}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Navigate to="/" />
              )}
            </span>
          </div>
          <div className={classes.container}>
            <main className={classes.main}>
            </main>
          </div>
          <div className={classes.footer}>Footer</div>
        </div>{" "}
      </></>);
};