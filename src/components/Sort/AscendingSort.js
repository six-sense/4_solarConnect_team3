import React from 'react';
import PropTypes from 'prop-types';
import { ResultContent, ResultTitle } from './SortStyle';

AscendingSort.propTypes = {
  numbers: PropTypes.array,
};

function AscendingSort(props) {
  const arr = [...props.numbers];
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        let value = result[j];
        result[j] = result[j + 1];
        result[j + 1] = value;
      }
    }
  }

  return (
    <>
      <ResultTitle>오름차순</ResultTitle>
      <ResultContent>{result.join(', ')}</ResultContent>
    </>
  );
}

export default AscendingSort;
