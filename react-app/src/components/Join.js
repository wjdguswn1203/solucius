// src/components/LoginForm.js
import React, {useState} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { useNavigate } from 'react-router-dom';
import './Login.css';
import './Join.css';

const Join = () => {
    const [userid, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleJoin = async (e) => {
        // 로그인 처리를 여기에 구현합니다.
        console.log('Userid:', userid);
        console.log('Password:', password);
        e.preventDefault();
        try {

            window.alert(`회원가입이 완료되었습니다.`);
            navigate('/dashboard');
        }
        catch (error) {
            console.error('회원가입 실패:', error);
            // 로그인 실패 시 처리 (예: 에러 메시지 표시 등)
        }

    };

    return (
        <div className="login-form-container">
            <div className="login-form-container2">
                <p className="title">
                    Solucius
                </p>
                <div className="Join-form">
                    <h2>회원가입</h2>

                    <div className="card">
                        <div>
                            <div className="flex-auto">
                                <label htmlFor="integer" className="font-bold block mb-2">
                                    아이디
                                </label>
                                <InputText id="userid" keyfilter="int" className="w-full" />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="number" className="font-bold block mb-2">
                                    비밀번호
                                </label>
                                <InputText id="password" keyfilter="num" className="w-full" />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="money" className="font-bold block mb-2">
                                    이름
                                </label>
                                <InputText id="name" keyfilter="money" className="w-full" />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="hex" className="font-bold block mb-2">
                                    이메일
                                </label>
                                <InputText id="email" keyfilter="hex" className="w-full" />
                            </div>
                        </div>
                        <Button className="Join-btn" label="Login" onClick={handleJoin} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;
