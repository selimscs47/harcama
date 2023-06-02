import "./Signup.module.css";
import { useSignup } from "../../hooks/useSignup";

import { Container, Typography, Button, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

export default function Signup() {

  const{signup,hata,bekliyor}=useSignup();
  const   navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    userName: "",
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);

    signup(values.email, values.password, values.userName);
    navigate("/");
  }

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
          Üye Ol
        </Typography>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput value={values.email} onChange={handleChange("email")} id="email" label="E mail" />
        </FormControl>

        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="password">Parola</InputLabel>
          <OutlinedInput
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

        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="user-name">Kullanıcı Adı</InputLabel>
          <OutlinedInput value={values.userName} onChange={handleChange("userName")} id="user-name" label="Kullanıcı Ad" />
        </FormControl>

      {!bekliyor && <Button type="submit" variant="outlined" color="info" size="large" sx={{ mt: 5 }}>
          Üye Ol
        </Button>}
        {bekliyor && <Button disabled  type="submit" variant="outlined" color="info" size="large" sx={{ mt: 5 }}>
          Bekliyor
        </Button>}
        {hata && <p p>{hata}</p>}
        

      </form>
    </Container>
  );
}
