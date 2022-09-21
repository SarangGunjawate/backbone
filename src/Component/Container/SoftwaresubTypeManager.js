import React, {useEffect, useState} from 'react'
import SoftwareSubTypeList from '../SoftwareSubType/SoftwareSubTypeList'
import {getSoftwareStypes, fetchSoftwareSubTypeList} from '../../Redux/Reducers/SoftwareSubTypeReducer'
import { useDispatch, useSelector } from 'react-redux';

function SoftwaresubTypeManager() {

  const dispatch = useDispatch();
  const SoftwareSubType = useSelector(getSoftwareStypes)

  // const SoftwareSubType = useSelector(state=>state.getSoftwareSubType)

  // const [softSubType, setSoftSubType] = useState(SoftwareSubTypelist);

  console.log('SoftwareSubType', SoftwareSubType)


  useEffect(() => {
    dispatch(
      fetchSoftwareSubTypeList()
    )
  }, []);

  // useEffect(() => {
  //   setSoftSubType(SoftwareSubTypelist);
  // }, [SoftwareSubTypelist]);

  return (
    <div>
      <SoftwareSubTypeList 
        SoftwareSubTypelist={SoftwareSubType}
      />
    </div>
  )
}

export default SoftwaresubTypeManager
