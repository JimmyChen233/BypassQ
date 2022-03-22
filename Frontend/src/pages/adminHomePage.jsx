import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Paper } from '@mui/material';
import NavLayout from '../components/NavLayout';
import { DataCard } from '../components/AdminHomePage/DataCard';
import { ROLE } from '../static/constants';
import dollarIcon from '../assets/dollar.svg';
import orderDataIcon from '../assets/orderdata.svg';
import userDataIcon from '../assets/userdata.svg';
import '../style/pages/adminHomePage.scss';
import { getAllOrdersHttp } from '../http/orderHttp';

const AdminHomePage = (props) => {
  const [orderDetail, setOrderDetail] = useState({
    orders: [],
    totalAmount: 0,
    topDishes: [],
  });
  const today = moment(Date()).format('dddd, D MMMM, YYYY');

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getAllOrdersHttp();
      const { orders, totalAmount, topDishes } = data;
      setOrderDetail({
        orders,
        totalAmount,
        topDishes,
      });
    };
    fetch();
  }, []);

  return (
    <NavLayout role={ROLE.ADMIN}>
      <section className="home-page">
        <header className="home-page__title">
          <span>Home</span>
          <span>{today}</span>
        </header>

        <div className="home-page__content">
          <span className="home-page__sub-header">Welcome to profolio</span>

          <div className="home-page__data">
            <DataCard cardIcon={dollarIcon} cardData={`$ ${orderDetail.totalAmount}`} cardTitle="Total Revenue" />
            <DataCard cardIcon={orderDataIcon} cardData={orderDetail.orders.length} cardTitle="Total Order" />
            <DataCard cardIcon={userDataIcon} cardData="3" cardTitle="Total Customer" />
          </div>

          <span className="home-page__sub-header">Top 3 Popular Dishes</span>
          <section className="home-page__top-three">
            {orderDetail.topDishes.map((item, index) => (
              <Paper className="home-page__top home-page__top">
                <div className={`home-page__top__icon home-page__top__icon--${index}`} />
                <section>
                  <div className="home-page__top__img">
                    <img src={item.url} alt="top" />
                  </div>
                  <span className="home-page__top__desc">
                    <h3>{item.name}</h3>
                  </span>
                </section>
              </Paper>
            ))}
          </section>
          {/* <div className="home-page__table">
            <table className="home-page__best">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Dish</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orderDetail.topDishes.map((dish) => (
                  <tr key={dish.name}>
                    <td className="table-image">
                      <img src={dish.url} alt="top" />
                    </td>
                    <td>{dish.name}</td>
                    <td>{`$${dish.price}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>
      </section>
    </NavLayout>
  );
};

export default AdminHomePage;
