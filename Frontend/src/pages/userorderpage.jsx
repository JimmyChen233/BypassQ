import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import StyledTableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import StyledTableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import NavLayout from '../components/NavLayout';
import { ROLE } from '../static/constants';
import UserContent from '../components/userContent';
import { myOrdersHttp } from '../http/orderHttp';
import { useAuth } from '../context/userContext';
import orderIcon from '../assets/orderIcon.svg';

const UserOrderPage = (props) => {
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useAuth();
  const { _id } = user;

  useEffect(() => {
    const fetch = async () => {
      const { data } = await myOrdersHttp(_id);
      setMyOrder(data.result);
    };
    fetch();
  }, [_id]);

  return (
    <NavLayout role={ROLE.USER}>
      <UserContent>
        <TableContainer component={Paper} className="userPage__order-table">
          <Table aria-label="simple table">
            <PerfectScrollbar className="userPage__table-scroll">
              <TableHead className="userPage__table-header">
                <StyledTableRow>
                  <StyledTableCell>Order Id</StyledTableCell>
                  <StyledTableCell align="right">Payment</StyledTableCell>
                  <StyledTableCell align="right">Payment date</StyledTableCell>
                  <StyledTableCell align="right">Payment Status</StyledTableCell>
                </StyledTableRow>
              </TableHead>

              <TableBody className="userPage__table-body">
                {myOrder.map((row) => (
                  <StyledTableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <StyledTableCell component="th" scope="row">
                      <div className="userPage__table-id">
                        <ReactSVG src={orderIcon} />
                        <span> {`#${row._id.substring(0, 8)}`}</span>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <span>{`$ ${row.totalPrice}`}</span>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <span>{`${row.payAt}`}</span>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <span className="userPage__table-status">{row.paymentStatus}</span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </PerfectScrollbar>
          </Table>
        </TableContainer>
      </UserContent>
    </NavLayout>
  );
};

export default UserOrderPage;
