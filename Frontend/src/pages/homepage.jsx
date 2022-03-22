import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import FbIcon from '../assets/facebook.svg';
import YoutuIcon from '../assets/Youtube.svg';
import InsIcon from '../assets/instagram.svg';
import NoodleIcon from '../assets/noodles.svg';
import ChopIcon from '../assets/chop.svg';
import BearIcon from '../assets/bear.svg';
import ClockIcon from '../assets/clock.svg';
import '../style/pages/homePage.scss';

const HomePage = () => {
  return (
    <section className="homepage">
      <section className="homepage__wrapper">
        <header className="homepage__header">
          <h2 className="homepage__title">Food Stop</h2>
          <ul className="homepage__options">
            <li>Menus</li>
            <li>Login</li>
          </ul>
        </header>

        <section className="homepage__section">
          <h5>Delicious.</h5>
          <h2>Hunger pangs? You’re at the right stop to drive it away!</h2>
          <Button className="homepage__menubtn">
            <Link to="/menu">CHECK MENU</Link>
          </Button>
          <ReactSVG className="homepage__Icon homepage__Icon--noodleIcon" src={NoodleIcon} />
          <ReactSVG className="homepage__Icon homepage__Icon--chopIcon" src={ChopIcon} />
          <ReactSVG className="homepage__Icon homepage__Icon--bearIcon" src={BearIcon} />
          <ReactSVG className="homepage__Icon homepage__Icon--clockIcon" src={ClockIcon} />
        </section>
      </section>
      <footer className="homepage__footer">
        <ul>
          <li className="homepage__foot-text">Follow our social media</li>
          <li className="homepage__foot--icon">
            <ReactSVG src={InsIcon} />
          </li>
          <li className="homepage__foot--icon">
            <ReactSVG src={YoutuIcon} />
          </li>
          <li className="homepage__foot--icon">
            <ReactSVG src={FbIcon} />
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default HomePage;
