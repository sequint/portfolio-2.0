import { Link } from 'react-router-dom'
import './SeeMoreBtn.css'

const SeeMoreBtn = ({ path }) => {

  const goTo = `/${path}`

  return(
    <div className="seeMoreContainer">
      <Link to={goTo}>
        <button className="seeMoreBtn">See More</button>
      </Link>
    </div>
  )
}

export default SeeMoreBtn
