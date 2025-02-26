import React from 'react'
import { useSelector } from 'react-redux'
import { localUserService } from '../../service/localService';
import UserDrop from './UserDrop';
import UserDropSign from './UserDropSign';

export default function UserMenu() {
  let userInfo = useSelector((state) => {
    return state.userReducer.userInfo;
  })
  console.log(userInfo);
  
  let renderContent = () =>{
    if(userInfo){
      return(
        <>
        
        <UserDrop 
        user={userInfo}
        
        
        />

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
    <div >
      {renderContent()}
    </div>
  )
}
