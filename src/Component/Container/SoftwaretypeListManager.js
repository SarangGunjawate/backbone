import React, { useEffect, useState } from "react";
import SoftwareTypeList from "../SoftwareType/SoftwareTypeList";
import {
  getSoftwareTypeList,
  fetchSoftwareTypeListDetails,
} from "../../Redux/Reducers/SoftwaretypeReducer";
import { useDispatch, useSelector } from "react-redux";
import { deleteSoftwareType } from "../../Services/SoftwaretypeListService";
import { UserActions } from "../../Utils/Helper";
import WithLoader from '../HOC/WithLoader'

function SoftwaretypeListManager(props) {
  const {setLoading} = props;
  const dispatch = useDispatch();
  const getSoftTypeList = useSelector(getSoftwareTypeList);
  console.log("getSoftTypeList", getSoftTypeList);
  const [selectedUser, setSelectedUser] = useState(null);
  console.log("selectedUser", selectedUser);

  useEffect(() => {
    dispatch(fetchSoftwareTypeListDetails());
  }, []);
  const handleUserAction = (user, action) => { 
    console.log("User", user); 
    console.log("action", action); 

    switch (action) {
      case UserActions.DELETE: 
        handleSoftwareTypeDeletion(user);
        break; 
  
      default: 
        break; 
    }
  };

  const handleSoftwareTypeDeletion = async (obj) => {
    // setLoading(true);
    console.log("selectes user", obj);
    setSelectedUser(obj);
    try {
      const response = await deleteSoftwareType(obj.id);
      setLoading(true);
      console.log("res", response);
      if (response.status === 200) {
        dispatch(fetchSoftwareTypeListDetails());
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  return (
    <div>
      <SoftwareTypeList
        softTypeList={getSoftTypeList}
        handleUserAction={handleUserAction}
        selectedUser={selectedUser}
      />
    </div>
  );
}

export default WithLoader(SoftwaretypeListManager);