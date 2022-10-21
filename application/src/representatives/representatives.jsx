import './representatives.css'
import { useState } from 'react'

import AdditionalInfo from '../additional-info/additional-info';
import MyTable from '../table/table';

const Representatives = ({ data, state }) => {
    const [clickedRep, setClickedRep] = useState()

    const handleClickedRow = (rowValues) => {
        setClickedRep(rowValues)
    }


    return (
        <>
            <h1>Representatives for {state}</h1>
            <div className="reps-container">
                <div className="table-container">
                    <MyTable rows={data} rowClick={handleClickedRow} />
                </div>
                <div className="additional-info-container">
                    {
                        clickedRep && (
                            <AdditionalInfo data={clickedRep} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Representatives