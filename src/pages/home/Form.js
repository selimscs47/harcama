import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
export default function Form() {
  const [baslik, setBaslik] = useState("");
  const [miktar, setMiktar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(baslik, miktar);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Typography variant="h6" color="darkslateblue">
        Harcama Bilgisini Giriniz{" "}
      </Typography>
        <TextField label="Harcama Başlığı" variant="standard" fullWidth required value={baslik} onChange={(e) => setBaslik(e.target.value)} />
        <TextField label="Harcama Miktarı" variant="standard" fullWidth required value={miktar} onChange={(e) => setMiktar(e.target.value)} sx={{my:5}} />
        <Button type="submit" variant="contained" color="secondary">EKLE </Button>
    </form>
  );
}
