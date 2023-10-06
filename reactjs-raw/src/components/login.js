import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState([
    { phoneNumber: '0923616634', password: 'tung123' },
    { phoneNumber: '0987654321', password: 'password2' },
    // Thêm người dùng khác vào danh sách ở đây
  ]);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập ở đây
    const user = userList.find((user) => user.phoneNumber === phoneNumber && user.password === password);
    if (user) {
      // Thực hiện hành động sau khi đăng nhập thành công
      setLoginError(false);
    } else {
      // Thực hiện hành động sau khi đăng nhập thất bại
      setLoginError(true);
    }
  };

  return (
    <div className="container">
      <h2 className='login'>Đăng nhập</h2>
     
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Số điện thoại</label>
          <input type="text" className="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mật khẩu</label>
          <div className="input-group">
            <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="input-group-append">
              <div className="input-group-text">
                <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                <span>Hiện mật khẩu</span>
              </div>
            </div>
          </div>
        </div>
        <a href='#' className='qmk'>Quên mật khẩu</a>
        {loginError && <p className="error-message">Số điện thoại hoặc mật khẩu không đúng.</p>}
        <div className="">
          <NavLink to={`/dang_ky`}>
            <button className='btn btn-info'>Đăng Ký</button>
          </NavLink>
          <button type="submit" className='btn btn-info'>Đăng nhập</button>
        </div>
      </form>
    </div>
  );
}

export default Login;