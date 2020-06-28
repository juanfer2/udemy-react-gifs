import React from 'react'
import PropTypes from 'prop-types';

import styled, { css, jsx } from '@emotion/styled'
const GyphyImageStyled = styled.div`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.12), 0px 2px 10px rgba(0, 0, 0, 0.12)
`;

function GyphyImage({img, title}) {
  return (
    <GyphyImageStyled>
      <div className="img" >
        <img src={img} alt={title} srcSet={title} />
      </div>
      <div className="content" >
        <span>
          {title}
        </span>
      </div>
    </GyphyImageStyled>
  )
}

GyphyImage.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string
}


export default GyphyImage
