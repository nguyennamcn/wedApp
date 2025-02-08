import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddAddressModal.css';  // Import file CSS

export default function AddAddressModal({ isOpen, onClose }) {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');

    useEffect(() => {
        axios.get('https://provinces.open-api.vn/api/?depth=1')
            .then(response => setProvinces(response.data))
            .catch(error => console.error('Error fetching provinces:', error));
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`)
                .then(response => {
                    setDistricts(response.data.districts);
                    setWards([]);
                    setSelectedDistrict('');
                    setSelectedWard('');
                })
                .catch(error => console.error('Error fetching districts:', error));
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict) {
            axios.get(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`)
                .then(response => {
                    setWards(response.data.wards);
                    setSelectedWard('');
                })
                .catch(error => console.error('Error fetching wards:', error));
        }
    }, [selectedDistrict]);

    const handleSave = () => {
        const address = `${provinces.find(p => p.code === selectedProvince)?.name || ''} - ${districts.find(d => d.code === selectedDistrict)?.name || ''} - ${wards.find(w => w.code === selectedWard)?.name || ''}`;
        console.log(address);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Thêm Địa Chỉ Mới</h2>

                <label>Họ & Tên</label>
                <input type="text" placeholder="Nhập vào" />

                <label>Số điện thoại</label>
                <input type="text" placeholder="Nhập vào" />

                <label>Địa chỉ</label>
                <select value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)}>
                    <option value="">Chọn Tỉnh/Thành phố</option>
                    {provinces.map(province => (
                        <option key={province.code} value={province.code}>{province.name}</option>
                    ))}
                </select>

                <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedProvince}>
                    <option value="">Chọn Quận/Huyện</option>
                    {districts.map(district => (
                        <option key={district.code} value={district.code}>{district.name}</option>
                    ))}
                </select>

                <select value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} disabled={!selectedDistrict}>
                    <option value="">Chọn Phường/Xã</option>
                    {wards.map(ward => (
                        <option key={ward.code} value={ward.code}>{ward.name}</option>
                    ))}
                </select>

                <label>Địa chỉ chi tiết</label>
                <input type="text" placeholder="Số nhà, tên đường, v.v..." />

                <div className="modal-buttons">
                    <button className="cancel-btn" onClick={onClose}>Hủy</button>
                    <button className="save-btn" onClick={handleSave}>Lưu</button>
                </div>
            </div>
        </div>
    );
} 
