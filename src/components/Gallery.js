import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import styled from 'styled-components';
import GalleryPreview from './GalleryPreview';


const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const initialItems = 12;
const additionalItems = 4;


const Gallery = () => {
  const [preview, togglePreview] = useState(false);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState(dummyArray.slice(0, initialItems));

  const observer = useRef();

  // When more images are loaded, restart the intersection observer.
  const LoadMoreRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPage(page + 1);
    });
    if (node) observer.current.observe(node);
  }, [images]);


  useEffect(() => {
    setImages(dummyArray.slice(0, initialItems + ((page - 1) * additionalItems)));
  }, [page]);

  return (
    <>
      <Container>

        {images.map((item, i) => (
          <GalleryItem
            key={`item-${item}`}
            imageSrc={item}
            onClick={() => togglePreview(true)}
            ref={(i === (images.length - 4)) ? LoadMoreRef : null}
          >
            {item}
          </GalleryItem>
        ))}

        {preview && <GalleryPreview preview togglePreview={togglePreview} />}

      </Container>

    </>
  );
};


export default Gallery;


const Container = styled.div`

    position:relative;
    width:100%;
    max-width:1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns: repeat(2, auto);
    row-gap:7px;
    column-gap:7px;
    justify-content:center;

    @media (min-width:650px){
        grid-template-columns: repeat(4, auto);
    }
    @media (min-width:1200px){
        grid-template-columns: repeat(6, auto);
    }
    
`;

const GalleryItem = styled.div`
    --width:150px;
    width:var(--width);
    height:calc(var(--width) * 1.25);
    background:pink;
    border-radius:5px;
`;
