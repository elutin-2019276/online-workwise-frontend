import { useState, useEffect } from "react";
import { useLogin } from "../shared/hooks/useLogin";
import { Howl, Howler } from 'howler';

export const Login = () => {
    const { isLoading, login } = useLogin();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    };

    useEffect(() => {
        const sound = new Howl({
            src: ['/src/assets/water-sound.mp3'],
            loop: true
        });

        sound.play();

        return () => {
            sound.unload();
        };
    }, []);

    return (
        <>
            <div style={{
                background: `url('/src/assets/fondo.gif') no-repeat center center fixed`, // Fondo GIF
                backgroundSize: 'cover', // Asegura que el fondo cubra toda la pantalla
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '60%',
                        backgroundColor: '#80FF0000',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        border: '2px solid white'
                    }}>
                        <form onSubmit={handleSubmit} className="login-form" style={{ width: '50%', marginRight: '20px' }}>
                            <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                            <p style={{ color: '#fff', textAlign: 'center' }}>¡Inicia sesión!</p>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: '#fff' }}>Username or email</label>
                                <input value={formData.username} onChange={handleChange} name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: '#fff' }}>Password</label>
                                <input value={formData.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1" style={{ color: '#fff' }}>¡Recuérdame!</label>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="submit" className="btn btn-primary">Login</button>
                                <a href="#" style={{ color: '#fff' }}>¿Olvidaste tu contraseña?</a>
                            </div>
                        </form>
                        <div style={{ width: '50%' }}>
                            <img src="/src/assets/logo.jpeg" alt="Login Illustration" style={{ width: '100%', borderRadius: '10px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
