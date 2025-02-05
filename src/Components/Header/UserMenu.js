import React from 'react'
import { useSelector } from 'react-redux'
import { localUserService } from '../../service/localService';
import { NavLink } from 'react-router-dom';
import UserDrop from './UserDrop';
import UserDropSign from './UserDropSign';

export default function UserMenu() {
  let userInfo = useSelector((state) => {
    return state.userReducer.userInfo;
  })
  console.log(userInfo);
  let handleLogout = () => {
    localUserService.remove();
    window.location.reload();
    window.location.href="/login";
  }
  let renderContent = () =>{
    if(userInfo){
      return(
        <>
        
        <UserDrop 
        user={userInfo}
        logoutBtn={
          <button
        onClick={handleLogout}
        >Đăng xuất</button>
        }
        
        />
        
        {/* <button
        onClick={handleLogout}
        >Đăng xuất</button> */}
      </>
      )
    }else{
      return(
        <>
        <UserDropSign />
      </>
      )
    }
  }
  return (
    <div className='space-x-5 flex items-center'>
      {renderContent()}
    </div>
  )
}
