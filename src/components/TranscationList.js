import React, {useContext} from 'react'
import { Transcation } from './Transcation';

import { GlobalContext } from '../context/GlobalState';

export const TranscationList = () => {
    const { transcations } = useContext(GlobalContext);
    
  return (
    <>
         <h3>History</h3>
         <ul className="list">
            {transcations.map(transcation => ( <Transcation key={transcation.id} transcation={transcation} />))}
         
      </ul>
    </>
  )
}
