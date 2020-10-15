import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import plate from '../plate.jpg';

dayjs.extend(advancedFormat);

export default function Day({ date, mealTitle }) {
  const [meal, setMeal] = useState(mealTitle);

  return (
    <Container>
      <Label inactive={!meal ? true : null}>
        <p>{dayjs(date).format('dddd Do')}</p>
      </Label>
      <Meal>
        <textarea
          type="text"
          aria-label="meal"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          data-gramm_editor="false"
        />
      </Meal>

    </Container>
  );
}

const Container = styled.div`
    position:relative;
    width:365px;
    height:80px;
    background: #FAFAFA;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.1);
    display:flex;
    justify-content:space-between;
    margin:0.75rem 0.5rem;
`;

const Label = styled.div`
    position:absolute;
    left: 5px;
    top:-12px;
    height:24px;
    width:130px;
    border-radius:12px;
    background:#ED7F40;
    display:flex;

    ${(props) => props.inactive && `
    background: #AAA;
  `}

    p{
        color:rgba(255,255,255,0.95);
        font-family:sans-serif;
        font-size:0.9rem;
        margin:auto;
    }
    
`;

const Image = styled.img`
    height:80px;
    width:80px;
    object-fit:cover;
`;

const Meal = styled.div`
    flex-grow:1;
    display:flex;

    textarea{
        resize:none;
        font-family:sans-serif;
        font-size:1.1rem;
        font-weight:700;
        padding-left:1rem;
        padding-top:20px;
        padding-right:1rem;
        background:none;
        border:none;
        height:60px;
        width:100%;
    }
`;
