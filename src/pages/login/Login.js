import "./Login.module.css";
import { Container, Typography, Button, FormControl, FilledInput, InputLabel, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const navigate = useNavigate();
  const { login, hata, bekliyor } = useLogin();

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    login(values.email, values.password);
    navigate("/");
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography sx={{ mt: 15, ml: 5, fontWeight: "bold" }} variant="h4" color="darkslateblue">
          Giriş Yap
        </Typography>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <FilledInput value={values.email} onChange={handleChange("email")} id="email" label="E mail" />
        </FormControl>

        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="password">Parola</InputLabel>
          <FilledInput
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            id="password"
            label="Parola"
            endAdornment={
              <InputAdornment position="end">
                <IconButton arial-label="Toggle Password" onClick={handleClickShowPassword} edge="end">
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {bekliyor && 
          <Button disabled type="submit" variant="outlined" color="info" size="large" sx={{ mt: 5 }}>
            BEKLİYOR
          </Button>
        }
        {!bekliyor && 
          <Button  type="submit" variant="outlined" color="info" size="large" sx={{ mt: 5 }}>
            GİRİŞ
          </Button>
        }
        {hata &&  <p>{hata}</p>}
        
      </form>
    </Container>
  );
}
