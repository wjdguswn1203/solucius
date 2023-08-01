import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const AccountFind = () => {
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const emailalert = () => {
        window.alert('해당 이메일로 인증번호가 전송되었습니다.');
        navigate('/');
    };

    return (
        <div className="login-form-container">
        <div className="login-form-container2">
        <p className="title">
            Solucius
        </p>
        <div className="login-form">
        <div style={{ width: '100%', align: 'center', marginTop: '15px' }}>
            <div style={{ marginTop: '40px', align: 'center'}}>
                ID 찾기를 위해 가입하신 이메일로 본인확인을 진행해주세요.
            </div>
            <br />
            <table>
                <tr>
                    <td>
                        <div
                            style={{
                                width: '450px',
                                height: '160px',
                                backgroundColor: '#f7f7f7',
                            }}
                        >
                            <table
                                style={{
                                    width: '450px',
                                    height: '100px',
                                    marginLeft: '30px',
                                    paddingTop: '40px',
                                }}
                            >
                                <td style={{ width: '120px', height: '30px', fontSize: 'large' }}>
                                    <p align="right" id="text">
                                        이메일 입력:&nbsp;
                                    </p>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="userEmail"
                                        name="userEmail"
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        placeholder="email"
                                        style={{ width: '200px', height: '30px', paddingLeft: '10px' }}
                                        align="right"
                                    />
                                </td>
                                <tr>
                                    <Button
                                        onClick={emailalert}
                                        style={{ width: '100%', height: '35px', fontSize: 'medium' }}
                                        align="left"
                                    >
                                        이메일 인증
                                    </Button>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        </div>
        </div>
        </div>
    );
};

export default AccountFind;
