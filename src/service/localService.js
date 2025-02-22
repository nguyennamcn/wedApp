export const localUserService ={
    get: () =>{
        let dataJson = localStorage.getItem("USER_INFO");
        return JSON.parse(dataJson);
    },
    set: (userInfo) => {
        if (userInfo) {
            const { accessToken, refreshToken, ...userData } = userInfo; // Không còn userInfo.metadata nữa
    
            if (accessToken && refreshToken) {
                localStorage.setItem("ACCESS_TOKEN", accessToken);
                localStorage.setItem("REFRESH_TOKEN", refreshToken);
            }
    
            localStorage.setItem("USER_INFO", JSON.stringify(userData));
        } else {
            console.error("Dữ liệu đăng nhập không hợp lệ:", userInfo);
        }
    },    
    getAccessToken: () => {
        return localStorage.getItem("ACCESS_TOKEN") || null;
    },

    getRefreshToken: () => {
        return localStorage.getItem("REFRESH_TOKEN") || null;
    },

    remove: () => {
        localStorage.removeItem("USER_INFO");
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("REFRESH_TOKEN");
    }
}