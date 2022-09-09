import React, {useEffect, useState} from "react";
import SoftwareList from "../SoftwareList/SoftwareList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getSoftwareList, fetchSoftwareListDetails} from '../../Redux/Reducers/SoftwareListReducer'
import WithLoader from '../HOC/WithLoader'

function SoftwareListManager(props) {
    // const { setLoading } = props;
  const dispatch = useDispatch();
  const geetingSoftList = useSelector(getSoftwareList);

  useEffect(() => {
    dispatch(
      fetchSoftwareListDetails()
    )
  }, []);


  return (
    <div>
      <SoftwareList
        softList={geetingSoftList}
      />
    </div>
  );
}

export default SoftwareListManager;
