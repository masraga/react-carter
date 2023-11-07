import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '../../../components/atoms/box';
import Container from '../../../components/atoms/container';
import Paper from '../../../components/atoms/paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TProductSpecification } from '../interfaces/IProductDetail';
import { CProductContext } from '../context/CProductDetail';

const ProductSpecification = (props: TProductSpecification) => {
  const detailContext = React.useContext(CProductContext);
  const SpecContainer = () => {
    let specItem: Array<React.ReactNode> = [];
    let index = 0;
    for (let spec of props.spec) {
      specItem.push(
        <TableRow key={`spec-row-${index}`}>
          <TableCell key={`spec-cell1-${index}`}>{spec.type}</TableCell>
          <TableCell key={`spec-cell2-${index}`} sx={{ fontWeight: 400 }}>
            {spec.value}
          </TableCell>
        </TableRow>,
      );
      index++;
    }
    return specItem;
  };

  return (
    <>
      <Paper sx={{ paddingTop: 2, paddingBottom: 2, minHeight: 350, maxHeight: 350, overflowY: 'scroll' }}>
        <Container>
          <Box>
            <Typography variant="h6">INFORMASI PRODUK</Typography>
            <Table
              sx={{ width: detailContext.tableWidth > 900 ? '100%' : detailContext.tableWidth }}
              aria-label="simple label"
            >
              <TableHead>
                <SpecContainer />
              </TableHead>
            </Table>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default ProductSpecification;
