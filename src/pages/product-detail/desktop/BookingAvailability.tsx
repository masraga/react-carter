import React from 'react';
import Box from '../../../components/atoms/box';
import Container from '../../../components/atoms/container';
import Paper from '../../../components/atoms/paper';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TBookingAvailability } from '../interfaces/IProductDetail';
import { CProductContext } from '../context/CProductDetail';

const BookingAvailability = (props: TBookingAvailability) => {
  const detailContext = React.useContext(CProductContext);
  const ScheduleContainer = () => {
    let scheduleItem: Array<React.ReactNode> = [];
    let index = 0;
    for (let schedule of props.schedule) {
      scheduleItem.push(
        <TableRow key={`book-avail-row-${index}`}>
          <TableCell key={`book-avail-cell1-${index}`}>{schedule.dateStart.toISOString()}</TableCell>
          <TableCell key={`book-avail-cell2-${index}`}>{schedule.dateEnd.toISOString()}</TableCell>
        </TableRow>,
      );
      index++;
    }
    return scheduleItem;
  };

  return (
    <>
      <Paper sx={{ paddingTop: 2, paddingBottom: 2, minHeight: 350, maxHeight: 350, overflowY: 'scroll' }}>
        <Container>
          <Box>
            <Typography variant="h6">JADWAL KETERSEDIAAN</Typography>
            <Table
              aria-label="simple label"
              sx={{ width: detailContext.tableWidth > 900 ? '100%' : detailContext.tableWidth }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>tanggal mulai</TableCell>
                  <TableCell>tanggal selesai</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <ScheduleContainer />
              </TableBody>
            </Table>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default BookingAvailability;
