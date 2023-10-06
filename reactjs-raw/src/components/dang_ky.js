import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function DangKy() {
  const [userList, setUserList] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }
    if (password.length <6) {
        setErrorMessage('Mật khẩu tối thiểu 6 ký tự.');
        return;
      }
    // Kiểm tra mật khẩu và nhập lại mật khẩu không được để trống
    if (password === '' || confirmPassword === '') {
      setErrorMessage('Mật khẩu và nhập lại mật khẩu không được để trống.');
      return;
    }

    // Kiểm tra số điện thoại
    if (phoneNumber.length !== 10) {
      setErrorMessage('Số điện thoại phải có 10 số.');
      return;
    }

    // Tạo tài khoản mới
    const newUser = {
      phoneNumber: phoneNumber,
      password: password,
    };

    // Cập nhật danh sách tài khoản
    setUserList([...userList, newUser]);

    // Đặt biến state success thành true
    setSuccess(true);

    // Đặt lại các trường nhập liệu
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  return (
    <div className="container">
      <h2 className='login'>Đăng Ký</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Số điện thoại</label>
          <input type="text" className="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mật khẩu</label>
          <input type="text" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Nhập lại mật khẩu</label>
          <input type="text" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div >
          <button type="submit" className="btn btn-info">Đăng Ký</button>
        </div>
        <NavLink to={`/login`} >
            <button className='btn btn-info'>Đăng Nhập</button>
          </NavLink>
      </form>

      {success && (
        <p className="success-message">Đăng ký thành công!</p>
      )}
    </div>
  );
}

export default DangKy;