import React from 'react'
import img1 from '../../img/EXE/3.png'

export default function HotProduct() {
    const data =[
        {
            key: 1,
            context: 'Nike',
            img: img1
        },
        {
            key: 2,
            context: 'Nike',
            img: img1
        },
        {
            key: 3,
            context: 'Nike',
            img: img1
        },
        {
            key: 4,
            context: 'Nike',
            img: img1
        },
        {
            key: 5,
            context: 'Nike',
            img: img1
        },
        {
            key: 6,
            context: 'Nike',
            img: img1
        }
    ]
  return (
    <div
        style={{
            padding: '3% 5%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '6%'
        }}
    >
        {data.map((item) => (
            <div
                key={item.id}
                style={{
                    height: '460px',
                    width: '15%',
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover', // Optional: Ensures the image covers the div
                    backgroundPosition: 'center', // Optional: Centers the image
                    backgroundRepeat: 'no-repeat',
                }}      
            >
                <p
                    style={{
                        color: 'white',
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.2)',
                        margin: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >{item.context}</p>
                
            </div>
        ))}
    </div>
  )
}
