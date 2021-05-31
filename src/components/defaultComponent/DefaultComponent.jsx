import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from 'react';
import loadingAction from './actions'
import './defaultComponent.scss';

const DefaultComponent = () => {
  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingAction(true));
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