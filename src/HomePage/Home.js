import classes from "../index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { slice } from "../store/store";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const Home = () => {



const userLogin = useSelector((state) => state.loginStatus.userLogin);
const dispatch = useDispatch();

const handleLogout = () => {
    dispatch(slice.actions.setLoginState(false));
    localStorage.removeItem("loginStatus"); 
  };
 const a =  (localStorage.getItem('loginStatus') && userLogin!==true ? dispatch(slice.actions.setLoginState(true)) : null);
  return (
    <>
      <div className={classes.App}>
        <div className={classes.header}>Aviation{" "}
          <span>
            {userLogin ? (
              <>
              <Link to="/User">
              <AccountCircleIcon variant="outlined" fontSize="large"
                  className={classes.account}></AccountCircleIcon>
                  </Link>
                <button
                  variant="outlined"
                  className={classes.buttonLogin}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/LoginPage">
                  <button
                    variant="outlined"
                    color="secondary"
                    className={classes.buttonLogin}
                  >
                    {" "}
                    Login
                  </button>
                </Link>
              </>
            )}
          </span>
        </div>
        <div className={classes.container}>
          <main className={classes.main}>
          </main>
        </div>
        <div className={classes.footer}>Footer</div>
      </div>{" "}
    </>
  );
};
