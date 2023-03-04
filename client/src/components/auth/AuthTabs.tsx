import React from "react";
import { Box, Tabs, Tab, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import Login from "../../utils/authUtils/Login";
import Registration from "../../utils/authUtils/Registration";

const AuthBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#333",
});

const AuthTabs: React.FC = ({ }) => {
    const [username, setUsername] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const [value, setValue] = React.useState<number>(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <AuthBox>
            <Box sx={{ bgcolor: "#fff", p: 3, borderRadius: '15px' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Login" />
                    <Tab label="Registration" />
                </Tabs>
                <Box sx={{ p: 3 }}>
                    {value === 0 && (
                        <Box component={'form'}>
                            <TextField
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                label="Email"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                label="Password"
                                fullWidth
                                margin="normal"
                                type="password"
                            />
                            <Login email={email} password={password} />
                        </Box>
                    )}
                    {value === 1 && (
                        <Box component={'form'}>
                            <TextField
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                label="Username"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                label="Email"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                label="Password"
                                fullWidth
                                margin="normal"
                                type="password"
                            />
                            <TextField
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                label="Password"
                                fullWidth
                                margin="normal"
                                type="password"
                            />
                            <Registration username={username} email={email} password={password} />
                        </Box>
                    )}
                </Box>
            </Box>
        </AuthBox>
    );
};

export default AuthTabs;
