export const localUserService = {
    get: () => {
        let dataJson = localStorage.getItem("USER_INFO");
        return dataJson ? JSON.parse(dataJson) : null;
        
    },
    
    
    set: (userInfo) => {
        if (userInfo) {
            console.log("Dữ liệu nhận vào:", userInfo);
            const {metadata } = userInfo;
    
            if (metadata.accessToken && metadata.refreshToken) {
                console.log("Lưu accessToken:", metadata.accessToken);
                console.log("Lưu refreshToken:", metadata.refreshToken);
                localStorage.setItem("ACCESS_TOKEN", metadata.accessToken);
                localStorage.setItem("REFRESH_TOKEN", metadata.refreshToken);
            } else {
                console.warn("Thiếu accessToken hoặc refreshToken");
            }
    
            if (metadata) {
                console.log("Lưu metadata:", metadata);
                localStorage.setItem("USER_INFO", JSON.stringify(metadata));
            }
        } else {
            console.error("Dữ liệu đăng nhập không hợp lệ:", userInfo);
        }
    },
    
    getAccessToken: () => localStorage.getItem("ACCESS_TOKEN") || null,

    getRefreshToken: () => localStorage.getItem("REFRESH_TOKEN") || null,

    remove: () => {
        console.log("xóa")
        localStorage.removeItem("USER_INFO");
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("REFRESH_TOKEN");
    }
};
