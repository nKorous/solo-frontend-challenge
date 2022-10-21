import './senators.css'
import { useState } from "react"
import MyTable from "../table/table"
import AdditionalInfo from "../additional-info/additional-info"

const Senators = ({ data, state }) => {
    const [clickedSenator, setClickedSenator] = useState()

    const handleClickedRow = (rowValues) => {
        setClickedSenator(rowValues)
    }

    return (
        <>
            <h1>Senators for {state}</h1>
            <div className="senators-container">
                <div className="table-container">
                    <MyTable rows={data} rowClick={handleClickedRow} />
                </div>

                <div className="additional-info-container">
                    {
                        clickedSenator && (
                            <AdditionalInfo data={clickedSenator} />
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Senators