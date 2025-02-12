import React, { useState } from 'react';
import '../../css/SellerPage/sellerPage.css';
import { validateName } from '../../Validation/CheckName/CheckName';
import SuccessModal from '../../Components/Modal/SuccessModal';
import { validateEmail } from '../../Validation/CheckEmail/CheckMail';
import { validatePhone } from '../../Validation/CheckPhone/CheckPhone';
import { validateOtp } from '../../Validation/CheckOtp/CheckOtp';
import { useNavigate } from 'react-router-dom';
import AddAddressModal from '../../Components/AddAddrassModal/AddAddressModal';


export default function RegisterSell() {
    const [errMessage, setErrMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);  // Trạng thái mở modal
    const [isOtpInputDis, setIsOtpInputDis] = useState(true);
    const [isSendButtonDis, setIsSendButtonDis] = useState(false);
    const [countDown, setCountDown] = useState(0);
    const navigate = useNavigate();
    const [isModalAdd, setIsModalAdd] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleSaveAddress = (address) => {
        setSelectedAddress(address);  // Lưu địa chỉ vào state
        console.log(selectedAddress)
    };

    const openAddressModal = () => {
        setIsModalAdd(true);
    }
    const closeAddressModal = () => {
        setIsModalAdd(false);
    }

    const sentOtp = () => {
        console.log('otp');

        setIsOtpInputDis(false);
        setTimeout(() => {
            setIsOtpInputDis(false);
        }, 2000);

        setIsSendButtonDis(true);
        setCountDown(30);

        const countDowInterval = setInterval(() => {
            setCountDown(prev => {
                if (prev <= 1) {
                    clearInterval(countDowInterval);
                    setIsSendButtonDis(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

    };

    const handleRegis = () => {
        var nameShop = document.getElementById('nameShop').value;
        var email = document.getElementById('emailSell').value;
        var sdt = document.getElementById('sdtSell').value;
        var otp = document.getElementById('otp').value;

        const nameValidation = validateName(nameShop);
        const emailValidation = validateEmail(email);  // Thêm kiểm tra email
        const phoneValidation = validatePhone(sdt);
        const otpValidation = validateOtp(otp);

        if (!nameValidation.isValid) {
            setErrMessage(nameValidation.message);
        } else if (!emailValidation.isValid) {
            setErrMessage(emailValidation.message);
        } else if (!phoneValidation.isValid) {
            setErrMessage(phoneValidation.message);
        } else if (!otpValidation.isValid) {
            setErrMessage(otpValidation.message);
        } else {
            setErrMessage('');
            console.log(nameShop, email, sdt, otp);
            setIsModalOpen(true);  // Mở modal khi đăng ký thành công
        }
    };


    const handleCloseModal = () => {
        setIsModalOpen(false);  // Đóng modal
        navigate('/')
    };

    return (
        <div
            style={{
                background: '#FF9513',
                height: '100vh',
                display: 'flex',
                padding: '1% 0'
            }}
        >
            <div style={{ width: '40%' }}></div>
            <div
                style={{
                    width: '60%',
                    background: 'white',
                    borderTopLeftRadius: '5%',
                    borderBottomLeftRadius: '5%',
                    padding: '1% 4%'
                }}
            >
                <p style={{ fontSize: '50px', fontWeight: '700' }}>
                    Đăng ký bán hàng với LOGO
                </p>

                {/* Hiển thị thông báo lỗi nếu có */}
                {errMessage && (
                    <p style={{ color: 'red', fontSize: '20px', position: 'absolute' }}>{errMessage}</p>
                )}

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
                    <div className='regisSell' style={{ textAlign: 'end', fontSize: '32px', width: '30%' }}>
                        <p>Tên shop</p>
                        <p>Địa chỉ lấy hàng</p>
                        <p>Email</p>
                        <p>Số điện thoại</p>
                    </div>

                    <div className='regisSell__input' style={{ marginTop: '16px', width: '70%', marginLeft: '5%' }}>
                        <div>
                            <input id='nameShop' type="text" placeholder="Nhập tên shop" />
                        </div>
                        <button
                            onClick={openAddressModal}
                            style={{
                                padding: '0 1%',
                                fontSize: '28px',
                                background: 'white',
                                borderRadius: '10px',
                                marginBottom: '7%',
                                maxWidth: '100%',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}
                        >
                            {selectedAddress
                                ? `${selectedAddress.detailAddress}, ${selectedAddress.address.ward}, ${selectedAddress.address.district}, ${selectedAddress.address.city}`.length > 50
                                    ? `${`${selectedAddress.detailAddress}, ${selectedAddress.address.ward}, ${selectedAddress.address.district}, ${selectedAddress.address.city}`.slice(0, 50)}...`
                                    : `${selectedAddress.detailAddress}, ${selectedAddress.address.ward}, ${selectedAddress.address.district}, ${selectedAddress.address.city}`
                                : '+ Thêm'}
                        </button>
                        <AddAddressModal isOpen={isModalAdd} onClose={closeAddressModal} onSaveAddress={handleSaveAddress} />
                        <div>
                            <input id='emailSell' type="text" placeholder="Nhập email" />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input id='sdtSell' style={{ padding: '0 15%' }} type="text" placeholder='Nhập số điện thoại' />
                            <p style={{ position: 'absolute', fontSize: '28px', left: '10px', top: '0' }}>+84 |</p>
                        </div>
                        <div>
                            <input
                                id='otp'
                                placeholder='Nhập mã xác minh'
                                style={{ width: '50%', marginRight: '5%', paddingLeft: '3%' }}
                                type="text"
                                disabled={isOtpInputDis}
                            />
                            <button
                                className='sentBtn'
                                style={{ fontSize: '28px', width: '15%' }}
                                onClick={sentOtp}
                                disabled={isSendButtonDis}
                            >
                                {isSendButtonDis ? `${countDown}s` : 'Gửi'}
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'end', marginTop: '3%' }}>
                    <button className='btnNext' style={{ fontSize: '32px', width: '22%' }} onClick={handleRegis}>
                        Đăng Ký
                    </button>
                </div>
            </div>

            {/* Success Modal */}
            <SuccessModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Đăng ký thành công!"
                message="Chúc mừng bạn đã đăng ký bán hàng thành công trên LOGO."
                autoClose={true}
                closeDelay={2000}  // Modal sẽ tự đóng sau 3 giây
            />
        </div>
    );
}
