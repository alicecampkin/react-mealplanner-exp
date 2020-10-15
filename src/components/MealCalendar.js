import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Day from './Day';

import mealPlan from '../content/MealPlan';

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');

dayjs.extend(isSameOrAfter);

const mealsPerPage = 9;

export default function MealCalendar() {
  const [page, setPages] = useState(1);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const yesterday = dayjs().subtract(1, 'day');
    const pageStart = mealsPerPage * (page - 1);
    const pageEnd = pageStart + mealsPerPage;

    const upcomingMeals = mealPlan
      .filter((meal) => dayjs(meal.date).isAfter(yesterday))
      .slice(pageStart, pageEnd);

    const startDate = upcomingMeals.length ? upcomingMeals[0].date : dayjs();

    for (let i = 0; i < mealsPerPage; i++) {
      if (!upcomingMeals[i]) {
        upcomingMeals.push({ date: dayjs(startDate).add(i, 'day') });
      }
    }
    setMeals(upcomingMeals);
  }, [page, mealPlan]);


  return (
    <>
      <Container>
        {meals
          .map((day, i) => <Day date={meals[i].date} meal={meals[i].meal} />)}
        <input type="submit" value="Save Changes" />
      </Container>

    </>
  );
}

MealCalendar.propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = styled.form`
    width:100%;
    display:flex;
    flex-wrap:wrap;
`;
