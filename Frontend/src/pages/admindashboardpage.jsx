import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import StyledTableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import StyledTableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NavLayout from '../components/NavLayout';
import { ROLE } from '../static/constants';

import '../style/pages/adminDashboardPage.scss';
import { ordersHttp } from '../http/orderHttp';

const AdminDashBoardPage = (props) => {
  const [order, setOrder] = useState([]);
  const today = moment(Date()).format('dddd, D MMMM, YYYY');

  useEffect(() => {
    const fetch = async () => {
      const { data } = await ordersHttp();
      const { orders } = data;
      setOrder(orders);
    };

    fetch();
  }, []);

  return (
    <NavLayout role={ROLE.ADMIN}>
      <section className="dashboard-page">
        <header className="dashboard-page__title">
          <span>Dashboard</span>
          <span>{today}</span>
        </header>
        <div className="dashboard-page__content">
          <span className="dashboard-page__sub-header">Order Report</span>
          <TableContainer component={Paper} className="dashboard-page__table">
            <Table aria-label="simple table">
              <PerfectScrollbar>
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Order Id</StyledTableCell>
                    <StyledTableCell align="right">Total</StyledTableCell>
                    <StyledTableCell align="right">Payment Status</StyledTableCell>
                  </StyledTableRow>
                </TableHead>

                <TableBody>
                  {order.map((row) => (
                    <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <StyledTableCell component="th" scope="row">
                        {`#${row._id.substring(0, 8)}`}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <span>{`$ ${row.totalPrice}`}</span>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <span className="dashboard-page__table-status">{row.paymentStatus}</span>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </PerfectScrollbar>
            </Table>
          </TableContainer>
        </div>
      </section>
    </NavLayout>
  );
};

export default AdminDashBoardPage;
