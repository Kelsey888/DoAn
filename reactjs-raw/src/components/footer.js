import React from 'react';

function Footer() {
  const footerStyle = {
    background: 'url("../br-ft.jpg")', // Thay đổi đường dẫn đến hình ảnh nền
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'white',
    padding: '20px',
    height: '385px',
    width: '100%', // Chỉnh chiều rộng của footer thành 100%
    marginTop: '10px', // Cách phần nội dung trên web 10px
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="">
        <p>Ngọc Tùng</p>
      </div>
    </footer>
  );
}

export default Footer;