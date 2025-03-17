import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './foter.css'

export default function FooterPage() {
  return (
    <footer
      style={{
        padding: '30px 20%',
        background: '#6EB566',
        color: 'white',
        width: '100%',
      }}
    >

      <div style={{ flex: 1 }}>
        <h1 style={{fontSize: '70px'}} className='font-xmark'>xmark</h1>
        <p><FaPhone /> Tổng đài CSKH: 0829982028</p>
        <p><FaEnvelope /> Email: cskh@xmark.com</p>
        <h6>Theo dõi xmark</h6>
        <p><FaFacebook /> Facebook</p>
        <p><FaInstagram /> Instagram</p>
      </div>

      <div style={{ flex: 1 }}>
        <h5>HỖ TRỢ KHÁCH HÀNG</h5>
        <p>Chính sách đổi hàng và bảo hành</p>
        <p>Chính sách thành viên</p>
        <p>Chính sách ưu đãi sinh nhật</p>
        <p>Chính sách bảo mật</p>
        <p>Chính sách giao hàng</p>
      </div>

      <div style={{ flex: 1 }}>
        <h5>Về xmark</h5>
        <p>Câu chuyện thương hiệu</p>
        <p>Giá trị cốt lõi</p>
        <p>Trách nhiệm cộng đồng</p>
        <p>Tìm hiểu nguyên liệu</p>
      </div>
    </footer>
  );
}
