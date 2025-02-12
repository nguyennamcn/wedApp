import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddAddressModal.css';  // Import file CSS

export default function AddAddressModal({ isOpen, onClose , onSaveAddress}) {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        cityCode: '',
        district: '',
        districtCode: '',
        ward: '',
        wardCode: '',
        detailAddress: ''
    });

    useEffect(() => {
        axios.get('https://provinces.open-api.vn/api/?depth=1')
            .then(response => setProvinces(response.data))
            .catch(error => console.error('Error fetching provinces:', error));
    }, []);

    useEffect(() => {
        if (formData.cityCode) {
            axios.get(`https://provinces.open-api.vn/api/p/${formData.cityCode}?depth=2`)
                .then(response => {
                    setDistricts(response.data.districts);
                    setWards([]);
                    setFormData(prev => ({ ...prev, district: '', districtCode: '', ward: '', wardCode: '' }));
                })
                .catch(error => console.error('Error fetching districts:', error));
        }
    }, [formData.cityCode]);

    useEffect(() => {
        if (formData.districtCode) {
            axios.get(`https://provinces.open-api.vn/api/d/${formData.districtCode}?depth=2`)
                .then(response => {
                    setWards(response.data.wards);
                    setFormData(prev => ({ ...prev, ward: '', wardCode: '' }));
                })
                .catch(error => console.error('Error fetching wards:', error));
        }
    }, [formData.districtCode]);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleChangeC = (e) => {
        const { name, value } = e.target;
        const selectedName = e.target.options[e.target.selectedIndex]?.getAttribute('data-name');
    
        if (name === 'cityCode') {
            setFormData(prev => ({ 
                ...prev, 
                cityCode: value, 
                city: selectedName || '' 
            }));
        }
    };
    
    const handleChangeD = (e) => {
        const { value } = e.target;
        const selectedName = e.target.options[e.target.selectedIndex]?.getAttribute('data-name');
    
        setFormData(prev => ({ 
            ...prev, 
            districtCode: value, 
            district: selectedName || '' 
        }));
    };
    
    const handleChangeW = (e) => {
        const { value } = e.target;
        const selectedName = e.target.options[e.target.selectedIndex]?.getAttribute('data-name');
    
        setFormData(prev => ({ 
            ...prev, 
            wardCode: value, 
            ward: selectedName || '' 
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        const addressUser = {
            fullName: formData.name,
            phone: formData.phone,
            address: {
                city: formData.city,
                district: formData.district,
                ward: formData.ward
            },
            detailAddress: formData.detailAddress
        };
        onSaveAddress(addressUser);  // Truyền dữ liệu về component cha
        onClose();  // Đóng modal sau khi lưu
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Thêm Địa Chỉ Mới</h2>
                <form onSubmit={handleSave}>
                    <label>Họ & Tên</label>
                    <input 
                        name="name"
                        type="text" 
                        placeholder="Nhập vào" 
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label>Số điện thoại</label>
                    <input 
                        name="phone"
                        type="text" 
                        placeholder="Nhập vào" 
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <label>Địa chỉ</label>
                    <select 
                        name="cityCode" 
                        value={formData.cityCode} 
                        onChange={handleChangeC}
                    >
                        <option value="">Chọn Tỉnh/Thành phố</option>
                        {provinces.map(province => (
                            <option key={province.code} value={province.code} data-name={province.name}>{province.name}</option>
                        ))}
                    </select>

                    <select 
                        name="districtCode" 
                        value={formData.districtCode} 
                        onChange={handleChangeD} 
                        disabled={!formData.cityCode}
                    >
                        <option value="">Chọn Quận/Huyện</option>
                        {districts.map(district => (
                            <option key={district.code} value={district.code} data-name={district.name}>{district.name}</option>
                        ))}
                    </select>

                    <select 
                        name="wardCode" 
                        value={formData.wardCode} 
                        onChange={handleChangeW} 
                        disabled={!formData.districtCode}
                    >
                        <option value="">Chọn Phường/Xã</option>
                        {wards.map(ward => (
                            <option key={ward.code} value={ward.code} data-name={ward.name}>{ward.name}</option>
                        ))}
                    </select>

                    <label>Địa chỉ chi tiết</label>
                    <input
                        name="detailAddress"
                        type="text" 
                        placeholder="Số nhà, tên đường, v.v..." 
                        value={formData.detailAddress}
                        onChange={handleChange}
                    />

                    <div className="modal-buttons">
                        <button type="button" className="cancel-btn" onClick={onClose}>Hủy</button>
                        <button type="submit" className="save-btn">Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
