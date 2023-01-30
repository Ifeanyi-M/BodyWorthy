import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container">
          <div className="main__header-left">
            <h4>#100DaysOfWorkOut</h4>
            <h1>Join The Champions of The Fitness World</h1>
            <p>
              Achieve your fitness goals and get the body worthy of your own expectations.
            </p>
            <Link to="/plans" className='btn lg'>Begin</Link>
          </div>
          <div className="main__header-right">
            <div className="main__header-circle"></div>
            <div className="main__header-image">
              <img src={Image} alt="Main Header Image"/>
            </div>
          </div>
        </div>
    </header>
  )
}

export default MainHeader