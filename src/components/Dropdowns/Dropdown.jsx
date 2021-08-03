import { motion } from "framer-motion";
import './dropdown.scss'

const Dropdown = () => {

  return (
    <section className='sectionDropDown-container'>
      <div className="item-1">
        <nav className='navBar'>
          <motion.i
            className="fab fa-typo3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >

          </motion.i>
          <div className='second'>
            <motion.a
              href=""
              className='first'
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              Menu
            </motion.a>
            <motion.a
              href=""
              className='contact'
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              Contact
            </motion.a>
            <div className="dropdown">
              <div className="drop">
                <a href="/" className="dropbtn">Dropdown</a>
                <i className="fas fa-sort-down"></i>
              </div>
              <div className="dropdown-content">
                <motion.a
                  href="#"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  Option 1
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  Option 2
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  Option 3
                </motion.a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="item-2">
        <nav className='navBar2'>
          <div className='boton'>
            <i className="fas fa-bars"></i>
            <motion.div
              className="menu"
            >
              <motion.div
                className='icon'
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 2 }}
              >
                <i className="fas fa-user"></i>
                <p>Login</p>
              </motion.div>
              <motion.div
                className='icon'
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 2, delay: 0.1 }}
              >
                <i className="fas fa-envelope"></i>
                <p>Email</p>
              </motion.div>
              <motion.div
                className='icon'
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 2, delay: 0.2 }}
              >
                <i className="fas fa-question"></i>
                <p>Help</p>
              </motion.div>
            </motion.div>
          </div>
        </nav>
      </div>





      <div className="item-3">3</div>
      <div className="item-4">4</div>


    </section>
  );
}

export default Dropdown;