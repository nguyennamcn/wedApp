import React from 'react'
import UserDrop from '../../Components/Header/UserDrop'
import HeaderPage from '../../Components/Header/HeaderPage'
import ListIntro from '../ListIntroProduct/ListIntro'
import DailyDeals from '../ListIntroProduct/DailyDeal'
import SearchCarousel from '../ListIntroProduct/SearchCarousel'

export default function HomePage() {

  return (
    <>
      <HeaderPage />
      <div
        style={{
          padding: '0 140px'
        }}
      >
        <ListIntro />

        {/* menu back */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div
            style={{
              width: '19%',
              background: '#D9D9D9',
              textAlign: 'center',
              borderRadius: '10px',
              padding: '20px 0'
            }}
          >
            Giao hàng nhanh
          </div>
          <div
            style={{
              width: '19%',
              background: '#D9D9D9',
              textAlign: 'center',
              borderRadius: '10px',
              padding: '20px 0'
            }}
          >
            Hỗ trợ nhiệt tình
          </div>
          <div
            style={{
              width: '19%',
              background: '#D9D9D9',
              textAlign: 'center',
              borderRadius: '10px',
              padding: '20px 0'
            }}
          >
            Giá rẻ chất lượng
          </div>
          <div
            style={{
              width: '19%',
              background: '#D9D9D9',
              textAlign: 'center',
              borderRadius: '10px',
              padding: '20px 0'
            }}
          >
            Thanh toán an toàn
          </div>
          <div
            style={{
              width: '19%',
              background: '#D9D9D9',
              textAlign: 'center',
              borderRadius: '10px',
              padding: '20px 0'
            }}
          >
            Cam kết hình thật
          </div>
        </div>
        {/* end menu back */}
        
        <div 
          style={{
            margin: '40px 0',
            background: '#D9D9D9',
            height: '10vh'
          }}
        >
          <img
            style={{
              width: '100%'
            }}
          src="https://www.facebook.com/photo/?fbid=1125449509224908&set=a.541250964311435&__cft__[0]=AZW5fpdBvfpzN7ISq2cBX9jFkPknrxvVArNaC6mP7lgu48xJnHg4rStoFGdDwcXn_I7c_c60drGZD7yKM5HmFNt-A1RwtQNnLh78WtC6eECGf_D5ws4eBZ1Si0YROK5v2hTKiMoluDMxgKd20Qj6j1rvw-nY8soOkiHVpViMhc41Ah0yQ197emdrkabK4dWwJt9TNrxu9TnCd7laW4Kjlgh3TewyxHYJZO7kFjltSTi7tA&__tn__=EH-R" alt="logo" />
        </div>


        <div style={{
          margin: '40px 0'
        }}>
          <DailyDeals />
        </div>

        <div>
          <SearchCarousel />
        </div>
      </div>

    </>
  )
}
