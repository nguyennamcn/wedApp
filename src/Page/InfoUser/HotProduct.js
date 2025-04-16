import React from 'react'
import img1 from '../../img/EXE/3.png'

export default function HotProduct() {
    const data = [
        { key: 1, context: 'Nike', img: img1 },
        { key: 2, context: 'Nike', img: img1 },
        { key: 3, context: 'Nike', img: img1 },
        { key: 4, context: 'Nike', img: img1 },
        { key: 5, context: 'Nike', img: img1 },
        { key: 6, context: 'Nike', img: img1 }
    ];

    return (
        <div
            className="container-fluid py-3"
            style={{
                paddingLeft: '5%',
                paddingRight: '5%',
                marginBottom: '6%',
            }}
        >
            <div className="row justify-content-between">
                {data.map((item) => (
                    <div
                        key={item.key}
                        className="col-12 col-md-6 col-lg-2 mb-4"
                        style={{
                            height: '400px',
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: '300% 100%', // Ensures image covers the div
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <p
                            style={{
                                color: 'white',
                                width: '100%',
                                height: '100%',
                                margin: '0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '8%'
                            }}
                        >
                            {item.context}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
