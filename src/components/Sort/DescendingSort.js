import React from 'react';
import PropTypes from 'prop-types';
import { ResultContent, ResultTitle } from './SortStyle';

DescendingSort.propTypes = {
  numbers: PropTypes.array,
  showDescending: PropTypes.bool,
};

function DescendingSort(props) {
  const arr = [...props.numbers];
  let result = arr.slice();

  for (let i = 0; i < result.length; i++) {
    for (let j = result.length - 1; j > i; j--) {
      if (result[j] > result[j - 1]) {
        let value = result[j];
        result[j] = result[j - 1];
        result[j - 1] = value;
      }
    }
  }

  return (
    <>
      <ResultTitle>내림차순</ResultTitle>
      <ResultContent>{props.showDescending && result.join(', ')}</ResultContent>
    </>
  );
}

export default DescendingSort;
