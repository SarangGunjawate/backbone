import React, {useEffect, useState} from "react";
import SoftwareList from "../SoftwareList/SoftwareList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getSoftwareList, fetchSoftwareListDetails} from '../../Redux/Reducers/SoftwareListReducer'
import WithLoader from '../HOC/WithLoader'

function SoftwareListManager(props) {
    // const { setLoading } = props;
  const dispatch = useDispatch();
  const softwareList = useSelector(getSoftwareList);
  console.log('sss', softwareList)
  const getStoreDetails = () => {
    dispatch(
      fetchSoftwareListDetails()
    )
  };

  useEffect(() => {
    getStoreDetails();
  }, []);


  return (
    <div>
      <SoftwareList
        softwareList={softwareList}
      />
    </div>
  );
}

export default SoftwareListManager;
