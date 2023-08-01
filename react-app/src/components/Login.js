// src/components/LoginForm.js
import React, {useState, usePopupState} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './Login.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


const Login = () => {
    const [userid, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        // 로그인 처리를 여기에 구현합니다.
        console.log('Userid:', userid);
        console.log('Password:', password);

        e.preventDefault();
        try {
            // 로그인 폼
            //const response = await axios.post('/api/login', { userid, password });
            // 로그인 성공 시, 메인 페이지로 이동하도록 처리합니다.
            navigate('/dashboard');
        }
        catch (error) {
                console.error('로그인 실패:', error);
                // 로그인 실패 시 처리 (예: 에러 메시지 표시 등)
        }

        const [modalIsOpen, setModalIsOpen] = usePopupState(false);

        const openModal = () => {
            setModalIsOpen(true);
        };

        const closeModal = () => {
            setModalIsOpen(false);
        };
    };

    const signGo = () => {
        navigate('/dashboard');
    }
    const findGo = () => {
        navigate('/dashboard');
    }

    return (
        <div className="login-form-container">
        <div className="login-form-container2">
        <p className="title">
            Solucius
        </p>
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
            <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
                <InputText
                    value={userid}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Id"
                />
            </div>
            <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>
                <InputText
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
            </div>
            <Button className="login-btn" label="Login" onClick={handleLogin} />
            </form>

            <div className="login-bottom-container">
                <div className="login-bottom">
                <p className="login-why">
                    계정이 없으신가요?
                </p>
                <p>
                    <p onClick={signGo}>회원가입</p>
                </p>
                </div>
                <div className="login-bottom">
                <p className="login-why">
                    계정을 잊어버리셨나요?
                </p>
                <p>
                    <p onClick={findGo}>
                        아이디/비밀번호 찾기</p>
                </p>
                </div>
            </div>

        </div>
        </div>
        </div>
    );
};

export default Login;
