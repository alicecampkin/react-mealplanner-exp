import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryPreview = ({ imageSrc, preview, togglePreview }) => {
  const ref = useRef();

  const handleClick = (e) => {
    if (!ref.current.contains(e.target)) (togglePreview(false));
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, []);


  if (!preview) return null;
  return (
    <Overlay>
      <PreviewContainer ref={ref}>
        <PreviewImage>{imageSrc}</PreviewImage>
        <ClosePreview onClick={() => togglePreview(false)}>Close</ClosePreview>
      </PreviewContainer>
    </Overlay>
  );
};

export default GalleryPreview;

GalleryPreview.propTypes = {
  preview: PropTypes.bool,
  togglePreview: PropTypes.func.isRequired,
  imageSrc: PropTypes.string,
};

GalleryPreview.defaultProps = {
  preview: false,
  imageSrc: 'No image available',
};

const Overlay = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.7);
`;

const PreviewContainer = styled.div`
    position:fixed !important;
    display:block;
    top:0;
    left:50%;
    transform:translateX(-50%);
    width:250px;
    height:80vh;
    background:white;
    position:absolute;
    margin:2rem auto;
    border-radius:5px;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.15);
`;

const PreviewImage = styled.div`
    width:100%;
    height:312px;
    background:lightblue;
    margin-top:32px;
`;

const ClosePreview = styled.p`
    position:absolute;
    margin:0;
    top:8px;
    right:10px;
`;
