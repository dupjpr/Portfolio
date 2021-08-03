import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getDataAction } from './actions'
import { motion } from "framer-motion";
import './defaultComponent.scss';

const DefaultComponent = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='sectionHome-container'>
      <div className='item item-1'>
        <motion.p
          animate={{ fontSize: 50, x: 200 }}
          transition={{ type: 'spring' }}
        >
          Hello.
        </motion.p>

        <p>I am</p>

        <motion.p
          animate={{ scale: 1.5 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          Juan Pablo R.
        </motion.p>
      </div>
      <div className='item item-2'>
        <motion.p
          initial={{ x: 200 }}
          animate={{ fontSize: 50, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          Hello.
        </motion.p>
        <motion.p
          initial={{ x: -200 }}
          animate={{ fontSize: 50, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          I am
        </motion.p>
        <motion.p
          animate={{ scale: 1.2 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          Juan Pablo R.
        </motion.p>
      </div>

      <div className='item item-3'>
        <p className='up'>
          Hello.
        </p>
        <motion.div className='down'>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            I am
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Juan Pablo R.
          </motion.p>
        </motion.div>
      </div>

      <div className='item item-4'>
        <motion.p
          className='arriba'
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          Hello
        </motion.p>
        <motion.div
          className='abajo'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <p>I am</p>
          <p>Juan Pablo R.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default DefaultComponent;
