import React from 'react';
import PropTypes from 'prop-types';
import { StyledVideoContainer, StyledVideo } from '../../styles/Courses/Video.styled';

const Video = ({ id }) => (
  <StyledVideoContainer>
    <StyledVideo
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </StyledVideoContainer>
);

export default Video;

Video.propTypes = {
  id: PropTypes.string.isRequired,
};
