import { useState } from 'react';
import Header from './header/header.jsx'
import { states } from './services/states'
import { getRepForState, getSenatorForState } from './services/callApi.js';
import './App.css'

import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import Representatives from './representatives/representatives.jsx';
import Senators from './senators/senators.jsx'

function App() {
  const [selection, setSelection] = useState('Representative')
  const [myState, setMyState] = useState('UT')
  const [reps, setReps] = useState([])
  const [senators, setSenators] = useState([])
  const [hasErrors, setHasErrors] = useState(false)

  const handleGetRepresentation = () => {
    setReps([])
    setSenators([])
    setHasErrors(false)

    switch (selection) {
      case 'Representative':
        getRepForState(myState)
          .then(data => data.json())
          .then(json => {
            json.error ? setHasErrors(true) : setReps(json.results)
          })
        break;
      case 'Senator':
        getSenatorForState(myState)
          .then(data => data.json())
          .then(json => {
            json.error ? setHasErrors(true) : setSenators(json.results)
          })
        break;
      default:
        alert('Please choose a valid selection')
    }
  }

  const resetSelections = () => {
    setReps([])
    setSenators([])
  }

  const handleChooseState = (event) => {
    setHasErrors(false)
    resetSelections()
    setMyState(event.target.value)
  }

  const handleChooseSelection = (event) => {
    setHasErrors(false)
    resetSelections()
    setSelection(event.target.value)
  }



  return (
    <div className="App">
      <Header title={'Who Represents Me?'} />
      <hr></hr>
      <div className="mainContainer">
        <div>
          <InputLabel id="senator-or-rep-selection">Senator or Representative?</InputLabel>
          <Select className="mui-select" labelId="senator-or-rep-selection" value={selection} onChange={(event) => handleChooseSelection(event)}>
            <MenuItem value={'Representative'}>Representative</MenuItem>
            <MenuItem value={"Senator"}>Senator</MenuItem>
          </Select>
        </div>

        <div>
          <InputLabel id="state-selection">State</InputLabel>
          <Select className="mui-select" labelId="state-selection" value={myState} onChange={(event) => handleChooseState(event)}>
            {
              states.map(state => {
                return (
                  <MenuItem key={state.abbreviation} value={state.abbreviation}>{state.name}</MenuItem>
                )
              })
            }
          </Select>
        </div>

        <Button variant='contained' onClick={() => handleGetRepresentation()}>Find Representation</Button>
      </div>

      <div className="dataContainer">
        {
          hasErrors && (
            <p>Oops. It seems there are no {selection}s for {myState} please select something else and try again</p>
          )
        }

        {
          reps.length && !hasErrors && (
            <Representatives data={reps} state={myState} />
          )
        }

        {
          senators.length && !hasErrors && (
            <Senators data={senators} state={myState} />
          )
        }
      </div>
    </div>
  );
}

export default App;
