import React, {useEffect} from 'react'
import SoftwareTypeList from '../SoftwareType/SoftwareTypeList'
import {getSoftwareTypeList, fetchSoftwareTypeListDetails} from '../../Redux/Reducers/SoftwaretypeReducer';
import { useDispatch, useSelector } from 'react-redux';

function SoftwaretypeListManager() {
    const dispatch = useDispatch();
    const getSoftTypeList = useSelector(getSoftwareTypeList);
    console.log('getSoftTypeList', getSoftTypeList)

    useEffect(() => {
        dispatch(
            fetchSoftwareTypeListDetails()
        )
      }, []);

  return (
    <div>
      <SoftwareTypeList softTypeList={getSoftTypeList}/>
    </div>
  )
}

export default SoftwaretypeListManager
