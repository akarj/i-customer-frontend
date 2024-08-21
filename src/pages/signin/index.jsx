import { GoogleLogin } from '@react-oauth/google';
import { Box, Button, Container, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { user, googleSignInSuccessHandler, googleSignInFailedHandler, googleLoggedOutHandler } = useAuth();

    return (
        <>
            <Container sx={{ height: '100dvh', display: 'flex', flexDirection: 'column', textAlign: 'center' }} component="section">
                <Typography variant="h1" gutterBottom sx={{ fontWeight: 700 }} pt={4}>
                    iCustomer
                </Typography>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h1" component="h1" gutterBottom>
                            Login
                        </Typography>
                        <Typography variant="h6" component="p" gutterBottom>
                            Log in with Google
                        </Typography>
                    </Box>

                    {user.loggedIn ? (
                        <Button
                            onClick={() => {
                                googleLoggedOutHandler();
                            }}
                        >
                            Logout
                        </Button>
                    ) : (
                        <>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    googleSignInSuccessHandler(credentialResponse);
                                }}
                                onError={e => {
                                    googleSignInFailedHandler(e);
                                }}
                            />
                        </>
                    )}
                </Box>
                <Box sx={{ flex: 1 }}></Box>
            </Container>
        </>
    );
};

export default SignIn;
