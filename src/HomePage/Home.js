import classes from "../index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { slice } from "../store/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import planesImage from "../images/planes.jpeg";

export const Home = () => {
  const userLogin = useSelector((state) => state.loginStatus.userLogin);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(slice.actions.setLoginState(false));
    localStorage.removeItem("loginStatus");
  };
  const a =
    localStorage.getItem("loginStatus") && userLogin !== true
      ? dispatch(slice.actions.setLoginState(true))
      : null;
  return (
    <>
      <div className={classes.App}>
        <div className={classes.header}>
          APEM{" "}
          <span>
            {userLogin ? (
              <>
                <Link to="/User">
                  <AccountCircleIcon
                    variant="outlined"
                    fontSize="large"
                    className={classes.account}
                  ></AccountCircleIcon>
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
          <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <Card sx={{ maxWidth: 580, height:300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={planesImage}
                  alt="Aviation"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Aviation Predicting Equipment Maintainance
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{textAlign: "left"}}>
                   About Us: 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
          </main>
        </div>
        <div className={classes.footer}></div>
      </div>{" "}
    </>
  );
};
