import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { slice } from "../store/store";
import classes from "../index.module.css";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Checkbox, FormControlLabel } from "@material-ui/core";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [text, setText] = useState("");
  const [rememberPwd, setRememberPwd] = useState(false);
  const user = {
    userName: "user",
    pwd: "12378900",
  };
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === user.userName && pwd === user.pwd) {
      setText("");
      dispatch(slice.actions.setLoginState(true));
      if(rememberPwd){
        localStorage.setItem("loginStatus", true);
      }
      history("/User"); 
    } else {
      setText("Wrong username or password");
    }
  };
  const enabled = pwd.length < 8 ? false : true;

  return (
    <>
      <div className={classes.App}>
        <div className={classes.header}>
            <span>
          APEM</span>
          <span>
            <Link to="/">
              <Home
                variant="outlined"
                className={classes.buttonLogin}
              />
            </Link>
          </span>
        </div>
        <div className={classes.container}>
          <main className={classes.main}>
            <div className= {classes.upperLayer}>
            <div className={classes.loginContainer}>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="User"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  label="Password"
                  type="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  margin="normal"
                  fullWidth
                />
                <br />
                {text.length ? <p style={{ color: "red" }}>{text}</p> : null}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberPwd}
                      onChange={(e) => setRememberPwd(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  id="outlined-password-input"
                  disabled={!enabled}
                >
                  Login
                </Button>
                </div>
              </form>
            </div>
          </div>
          </main>
        </div>
        <div className={classes.footer}>Footer</div>
      </div>{" "}
    </>
  );
};
