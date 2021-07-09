const correctAnswer = (data) => ({
  type: 'CORRECT',
  payload: data
});
const notification = (data) => ({
  type: 'NOTIFI',
  payload: data
});
const score = (data) => ({
  type: 'SCORE',
  payload: data
});

const setColorAction = (data, notifi, num) => {
  console.log(num);
  return dispatch => {
    dispatch(correctAnswer(data));
    dispatch(notification(notifi));
    dispatch(score(num));

    const timer = setTimeout(() => {
      dispatch(notification(false));
      clear();
    }, 500);

    const clear = () => {
      clearTimeout(timer);
    }
  }
}

export default setColorAction;