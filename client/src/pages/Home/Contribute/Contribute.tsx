import './Contribute.scss';
import { Link } from 'react-router-dom';

const Contribute: React.FC = () => {
    return (
        <div className='contribute'>
            <h1 className="contribute-text">We Thank You For Any Contribution</h1>
            <Link className="link donate-link" to="/donate">
            DONATE
          </Link>
        </div>
    )
}

export default Contribute