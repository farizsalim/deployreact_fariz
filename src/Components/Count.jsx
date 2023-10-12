import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../App/feature/counter/actions';

const Count = () => {
    const count = useSelector((state) => state.counter);
     const dispatch = useDispatch();

  return (
    <div className="container d-flex justify-content-center my-5">
      <button type="button" className="btn btn-danger mx-2" onClick={() => dispatch(decrementCount(1))}>
        -
      </button>
      <h5>{count}</h5>
      <button type="button" className="btn btn-success mx-2" onClick={() => dispatch(incrementCount(1))}>
        +
      </button>
    </div>
  );
};

export default Count;