import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./admincp.css";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { HiMiniUsers } from "react-icons/hi2";
import { BsCartFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { RiArrowDownBoxFill } from "react-icons/ri";
import { RiArrowUpBoxFill } from "react-icons/ri";
import { CiBank } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { Flex, Progress } from 'antd';
import { appService } from "../../../service/appService";

const allData = {
  "6months": [
    { name: "Tháng 01", truyCap: 4000, doanhThu: 2400 },
    { name: "Tháng 02", truyCap: 3000, doanhThu: 1398 },
    { name: "Tháng 03", truyCap: 2000, doanhThu: 9800 },
    { name: "Tháng 04", truyCap: 2780, doanhThu: 3908 },
    { name: "Tháng 05", truyCap: 1890, doanhThu: 4800 },
    { name: "Tháng 06", truyCap: 2390, doanhThu: 3800 },
  ],
  "12months": [
    { name: "Tháng 01", truyCap: 4000, doanhThu: 2400 },
    { name: "Tháng 02", truyCap: 3000, doanhThu: 1398 },
    { name: "Tháng 03", truyCap: 2000, doanhThu: 9800 },
    { name: "Tháng 04", truyCap: 2780, doanhThu: 3908 },
    { name: "Tháng 05", truyCap: 1890, doanhThu: 4800 },
    { name: "Tháng 06", truyCap: 2390, doanhThu: 3800 },
    { name: "Tháng 07", truyCap: 3490, doanhThu: 4300 },
    { name: "Tháng 08", truyCap: 3000, doanhThu: 3600 },
    { name: "Tháng 09", truyCap: 2500, doanhThu: 4000 },
    { name: "Tháng 10", truyCap: 2700, doanhThu: 4200 },
    { name: "Tháng 11", truyCap: 3200, doanhThu: 4100 },
    { name: "Tháng 12", truyCap: 3600, doanhThu: 4700 },
  ],
  "2years": [
    { name: "Năm 1", truyCap: 18000, doanhThu: 10400 },
    { name: "Năm 2", truyCap: 22000, doanhThu: 14000 },
  ],
};

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("6months");
  const [totalSeller , setTotalSeller] = useState([]);
  const [data, setData] =useState([]);

  useEffect(() => {
      appService
        .getAllSellerAD()
        .then((res) => {
          setTotalSeller(res.data.metadata)          
        })
        .catch((err) => {
          console.error("Error fetching stores:", err);
        });
    },[]);

    console.log(totalSeller)
  
  useEffect(() => {
      appService
        .getAllOrderAD()
        .then((res) => {
          console.log(res);
          setData(res.data.metadata)
        })
        .catch((err) => {
          console.error("Error fetching stores:", err);
        });
    }, []);


    console.log(
      data
    )

  const handleChangeRange = (e) => {
    setTimeRange(e.target.value);
  };
  return (
    <div className="dashboard-container">
      {/* Header Boxes */}
      <h3
        style={{
          marginBottom: "2%",
        }}
      >
        Thống Kê
      </h3>
      <div className="stats-boxes">
        <div className="stat-card">
          <HiOutlineBuildingStorefront
            style={{
              height: "37px",
              width: "37px",
              color: "#43903A",
            }}
          />
          <p
            style={{
              margin: "0",
              fontSize: "15px",
            }}
          >
            Người bán
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              {totalSeller.totalSellers}
            </span>
            <span
              style={{
                color: "green",
                fontSize: "12px",
                marginLeft: "5px",
                padding: "2px 5px",
                backgroundColor: "#e6f7ff",
                borderRadius: "5px",
              }}
            >
              <BsArrowUp /> 7.34%
            </span>
          </div>
        </div>
        <div className="stat-card">
          <HiMiniUsers
            style={{
              height: "37px",
              width: "37px",
              color: "#43903A",
            }}
          />
          <p
            style={{
              margin: "0",
              fontSize: "15px",
            }}
          >
            Người mua
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              15
            </span>
            <span
              style={{
                color: "green",
                fontSize: "12px",
                marginLeft: "5px",
                padding: "2px 5px",
                backgroundColor: "#e6f7ff",
                borderRadius: "5px",
              }}
            >
              <BsArrowUp /> 7.34%
            </span>
          </div>
        </div>
        <div className="stat-card">
          <BsCartFill
            style={{
              height: "37px",
              width: "37px",
              color: "#43903A",
            }}
          />
          <p
            style={{
              margin: "0",
              fontSize: "15px",
            }}
          >
            Đơn hàng
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              {data.totalOrders}

            </span>
            <span
              style={{
                color: "green",
                fontSize: "12px",
                marginLeft: "5px",
                padding: "2px 5px",
                backgroundColor: "#e6f7ff",
                borderRadius: "5px",
              }}
            >
              <BsArrowUp /> 7.34%
            </span>
          </div>
        </div>
        <div className="stat-card">
          <BiDollar
            style={{
              height: "37px",
              width: "37px",
              color: "#43903A",
            }}
          />
          <p
            style={{
              margin: "0",
              fontSize: "15px",
            }}
          >
            Doanh thu
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              {data.totalPrice?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </span>
            <span
              style={{
                color: "red",
                fontSize: "12px",
                marginLeft: "5px",
                padding: "2px 5px",
                backgroundColor: "#e6f7ff",
                borderRadius: "5px",
              }}
            >
              <BsArrowDown /> 7.34%
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Chart */}
        <div className="chart-box">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5%",
            }}
            className="chart-header"
          >
            <span
              style={{
                fontSize: "16px",
                color: "#6EB566",
                padding: "5px 10px",
                borderRadius: "10px",
                background:
                  "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(227, 253, 224, 0.5) 12%, rgba(223, 252, 220, 0.6) 100%)",
              }}
            >
              Phân tích doanh số
            </span>
            <select
              style={{
                outline: "none",
                marginTop: "5%",
              }}
              value={timeRange}
              onChange={handleChangeRange}
              className="range-select"
            >
              <option value="6months">6 tháng</option>
              <option value="12months">12 tháng</option>
              <option value="2years">2 năm</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={allData[timeRange]}>
              <Line
                type="monotone"
                dataKey="truyCap"
                stroke="#FF4C4C"
                name="Lượt truy cập"
              />
              <Line
                type="monotone"
                dataKey="doanhThu"
                stroke="#00C49F"
                name="Doanh thu"
              />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Wallet Box */}
        <div style={{
          width: "30%",
        }}>
          <div className="wallet-box">
            <p style={{
              fontSize: "24px",
              margin: "0",
              fontWeight: "600",
            }}>
            {data.totalPrice?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </p>
            <p style={{
              fontSize: "20px",
              margin: "0",
              marginBottom: "10%",
            }}>Ví của sàn</p>

            <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="wallet-transactions">
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}>
                <RiArrowDownBoxFill 
                  style={{
                    color: "#046BDA",
                    fontSize: "52px",
                  }}
                />
                <div>
                  <p style={{
                    margin: "0",
                    fontSize: "16px",
                    color: "white",
                  }}>
                  {data.totalPrice?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </p>
                  <p style={{
                    margin: "0",
                    fontSize: "14px",
                    color: "#467341",
                  }}>Nguồn thu</p>
                </div>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}>
                <RiArrowUpBoxFill 
                  style={{
                    color: "#D7686B",
                    fontSize: "52px",
                  }}
                />
                <div>
                  <p style={{
                    margin: "0",
                    fontSize: "16px",
                    color: "white",
                  }}>0</p>
                  <p style={{
                    margin: "0",
                    fontSize: "14px",
                    color: "#467341",
                  }}>Nguồn chi</p>
                </div>
              </div>
            </div>

            <div className="wallet-buttons">
              <button className="btn-send">Gửi</button>
              <button className="btn-receive">Nhận</button>
            </div>
          </div>
          <div style={{
            display: "flex",
            backgroundColor: "#CAF7C6",
            borderRadius: "10px",
            padding: "5%",
            marginTop: '10px'
          }}>
            <div className="summary-row-db">
              <p style={{
                color: "#383838",
                fontSize: "14px",
                fontWeight: "600",
                margin: "0",
              }}>Tài sản:</p>
              <CiBank 
                style={{
                  width: "36px",
                  height: "36px",
                  color: "#0451AB",
                }}
              />
              <p style={{
                fontSize: "13px",
                fontWeight: "600",
                margin: "0",
              }}>
              {data.totalPrice?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
              </p>
              <p style={{
                fontSize: "12px",
                fontWeight: "400",
                margin: "0",
              }}>Đạt được <span>70%</span></p>
              <Flex vertical gap="small" style={{ width: 180 }}>
                <Progress
                  percent={70}
                  percentPosition={{ align: 'end', type: 'inner' }}
                  size={[150, 12]}
                  strokeColor="linear-gradient(to right, #4A90E2 6%, #8BD8FA 100%)"
                />
              </Flex>
            </div>
            <div className="summary-row-db">
              <p style={{
                color: "#383838",
                fontSize: "14px",
                fontWeight: "600",
                margin: "0",
              }}>Tài sản:</p>
              <CiMoneyBill
                style={{
                  width: "36px",
                  height: "36px",
                  color: "#219415",
                }}
              />
              <p style={{
                fontSize: "13px",
                fontWeight: "600",
                margin: "0",
              }}>12,497</p>
              <p style={{
                fontSize: "12px",
                fontWeight: "400",
                margin: "0",
              }}>Đạt được <span>50%</span></p>
              <Flex vertical gap="small" style={{ width: 180 }}>
                <Progress
                  percent={50}
                  percentPosition={{ align: 'end', type: 'inner' }}
                  size={[150, 12]}
                  strokeColor="linear-gradient(to right, #2DB71E 6%, #AAD8A5 100%)"
                />
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
