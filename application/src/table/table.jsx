import './table.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyTable = ({rows, rowClick}) => {

    const handleClickedRow = (row) => {
        rowClick(row)
    }

    return (
        <div className="table-container">
        <TableContainer component={Paper}>
            <Table>
                <TableHead className="table-head">
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Party</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map(row => {
                            return (
                                <TableRow key={row.name} className='table-tr' onClick={() => handleClickedRow(row)}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.party}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}

export default MyTable