import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from 'react';
import loadingAction from './actions'
import './defaultComponent.scss';
import { request } from '../../utilities/httpRequest';

const DefaultComponent = () => {
  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  
  useEffect(() => {
    // const { GET } = _http;
    dispatch(loadingAction(true));
    const quote = request({url: 'https://geek-quote-api.herokuapp.com/v1/quote'});
    console.log('this --->',quote);
  }, []);

  return (
    <section className='sectionHome-container'>
      {
        storeData?.loading
          ? <h1>Loading...</h1>
          : <Fragment>
            <h1>Welcome to Cognitio Artifacts SAS</h1>
            <div>{storeData.hello}</div>
          </Fragment>
      }
    </section>
  );
}

export default DefaultComponent;