import './additional-info.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AdditionalInfo = ({ data }) => {
    return (
        <div className="additional-info-container">
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>{data.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Party</TableCell>
                            <TableCell>{data.party}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>District</TableCell>
                            <TableCell>{data.district}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>{data.phone}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Office Address</TableCell>
                            <TableCell>{data.office}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Website</TableCell>
                            <TableCell><a href={data.link} target="_blank">{data.link}</a></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AdditionalInfo