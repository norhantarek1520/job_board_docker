import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation (optional)

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // For navigation (optional)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:8000/users/auth/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });


            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('accessToken', data.access);
                localStorage.setItem('refreshToken', data.refresh); // Consider secure storage
                navigate('/'); // Redirect on success (optional)
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred during login. Please try again.');
            window.alert('Server problem in Users service. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (<>
        {/* <!-- bradcam_area  --> */}
        <div className="bradcam_area bradcam_bg_1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="bradcam_text">
                            <h3>Login </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--/ bradcam_area  -- --> */}
        {/* Login form with existing styling */}
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{ "border-radius": "15px;" }}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Login</h2>

                                <form onSubmit={handleSubmit}>
                                    {/* Username and password fields */}

                                    <div className="form-outline mb-4">

                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Username"
                                        />

                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control form-control-lg"
                                            placeholder="Password"
                                        />

                                    </div>


                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" disabled={loading}>
                                            {loading ? 'Loading...' : 'Login'}
                                        </button>

                                    </div>
                                    <p className="text-center text-muted mt-5 mb-0">
                                        Create new account?{' '}
                                        <a href="#" className="fw-bold text-body">
                                            <u>Sign Up Here</u>
                                        </a>
                                    </p>
                                    {error && <p className="error">{error}</p>}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Login;
