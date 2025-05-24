import React, { useState } from "react";
import {
  Table,
  Input,
  Button,
  Tabs,
  Tag,
  Select,
  Space,
  Pagination,
  Typography,
} from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { ImNotification } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { TabPane } = Tabs;

const allProducts = [
  {
    key: "1",
    name: "Quần Short Unisex Basic Thể Thao",
    image: "https://via.placeholder.com/60",
    sales: 5,
    price: "39,000đ",
    inventory: 3,
    contentQuality: "Đạt chuẩn",
    status: "active",
  },
  {
    key: "2",
    name: "Áo Polo Nam Trơn Nhiều Màu",
    image: "https://via.placeholder.com/60",
    sales: 0,
    price: "129,000đ",
    inventory: 5,
    contentQuality: "Cần cải thiện",
    status: "active",
  },
  {
    key: "3",
    name: "Túi Đeo Chéo Unisex Nhỏ Gọn",
    image: "https://via.placeholder.com/60",
    sales: 10,
    price: "79,000đ",
    inventory: 1,
    contentQuality: "Thiếu nội dung",
    status: "violations",
  },
  {
    key: "4",
    name: "Giày Sneaker Nam Nữ",
    image: "https://via.placeholder.com/60",
    sales: 2,
    price: "299,000đ",
    inventory: 2,
    contentQuality: "Đạt chuẩn",
    status: "unlisted",
  },
  {
    key: "5",
    name: "Balo Laptop Chống Nước",
    image: "https://via.placeholder.com/60",
    sales: 8,
    price: "199,000đ",
    inventory: 4,
    contentQuality: "Cần cải thiện",
    status: "active",
  },
];

export default function AllProduct() {
  const [tabKey, setTabKey] = useState("all");
  const [subTabKey, setSubTabKey] = useState("allSub");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const handleThem = () =>{
    navigate('/seller-page/addProduct')
  }

  const filterProducts = () => {
    let data = [...allProducts];

    if (tabKey !== "all") {
      data = data.filter((item) => item.status === tabKey);
    }

    if (subTabKey === "missing") {
      data = data.filter((item) => item.contentQuality === "Thiếu nội dung");
    } else if (subTabKey === "improve") {
      data = data.filter((item) => item.contentQuality === "Cần cải thiện");
    }

    if (searchText) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(searchText)
      );
    }

    return data;
  };

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <img src={record.image} alt="product" width={40} />
          <span>{text}</span>
        </Space>
      ),
    },
    {
      title: "Doanh số",
      dataIndex: "sales",
      key: "sales",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Kho hàng",
      dataIndex: "inventory",
      key: "inventory",
    },
    {
      title: "Chất lượng nội dung",
      dataIndex: "contentQuality",
      key: "contentQuality",
      render: (text) => {
        let color = "green";
        if (text === "Cần cải thiện") color = "orange";
        if (text === "Thiếu nội dung") color = "red";
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Thao tác",
      key: "action",
      render: () => <Button size="small">Sửa</Button>,
    },
  ];

  return (
    <div
      style={{
        padding: "2%",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "2%",
          height: "5vh",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            width: "5px",
            height: "100%",
            backgroundColor: "#6EB566",
            marginRight: "10px",
          }}
        ></span>
        <ImNotification
          style={{
            color: "#6EB566",
          }}
        />
        <span
          style={{
            fontSize: "14px",
            color: "#000",
            marginLeft: "10px",
          }}
        >
          Đơn đăng ký của bạn hiện đang trong quá trình xét duyệt. Sản phẩm của
          bạn sẽ hiển thị với khách hàng sau khi hoàn tất xác minh. Cảm ơn bạn
          đã kiên nhẫn chờ đợi!
        </span>
      </div>
      <div style={{ padding: 24, background: "#fff", borderRadius: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={3}>Sản phẩm</Title>
          <Button
          onClick={handleThem}
          type="primary" icon={<PlusOutlined />}>
            Thêm sản phẩm mới
          </Button>
        </div>

        <Tabs activeKey={tabKey} onChange={setTabKey} type="line">
          <TabPane tab="Tất cả" key="all" />
          <TabPane tab="Đang hoạt động (3)" key="active" />
          <TabPane tab="Vi phạm (1)" key="violations" />
          <TabPane tab="Chờ duyệt bởi Xmark (0)" key="pending" />
          <TabPane tab="Chưa được đăng (1)" key="unlisted" />
        </Tabs>

        <Tabs activeKey={subTabKey} onChange={setSubTabKey} type="card">
          <TabPane tab="Tất cả" key="allSub" />
          <TabPane tab="Cần bổ sung (1)" key="missing" />
          <TabPane tab="Cần cải thiện nội dung (2)" key="improve" />
        </Tabs>

        <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <Input.Search
            placeholder="Tìm sản phẩm, SKU..."
            allowClear
            enterButton={<SearchOutlined />}
            onSearch={handleSearch}
            style={{ flex: 1 }}
          />
          <Select placeholder="Ngành hàng" style={{ width: 200 }}>
            <Select.Option value="all">Tất cả</Select.Option>
          </Select>
        </div>

        <Table
          dataSource={filterProducts()}
          columns={columns}
          pagination={false}
          bordered
          rowKey="key"
        />

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Pagination defaultCurrent={1} total={filterProducts().length * 10} />
        </div>
      </div>
    </div>
  );
}
