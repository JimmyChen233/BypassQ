import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

export const DataCard = (props) => {
  const { cardIcon, cardData, cardTitle } = props;

  return (
    <Paper elevation={3} className="home-page__datacard">
      <ReactSVG className="home-page__datacard-icon" src={cardIcon} />
      <div className="home-page__datacard-data">
        <span className="home-page__datacard-title">{cardTitle}</span>
        <span className="home-page__datacard-content">{cardData}</span>
      </div>
    </Paper>
  );
};

DataCard.propTypes = {
  cardIcon: PropTypes.string,
  cardData: PropTypes.string,
  cardTitle: PropTypes.string,
};
