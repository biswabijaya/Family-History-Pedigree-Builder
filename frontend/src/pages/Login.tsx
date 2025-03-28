// import React, { useState } from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/");
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Login error:", error);
      alert("Login failed due to " + error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Google login error:", error);
      alert("Google login failed due to " + error.message);
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={6}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
        <Divider>OR</Divider>
        <Button variant="outlined" onClick={handleGoogle}>
          Sign in with Google
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
