import {Link} from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found.</h2>
        <div>
        <Link to="/" className='btn'> Return Home</Link>

        </div>
        
      </div>
      
    </section>
  )
}

export default NotFound