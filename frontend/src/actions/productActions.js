import axios from 'axios';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('/api/products');
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_ERROR,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}


const fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i)
    }
  }
}
fizzbuzz(100)