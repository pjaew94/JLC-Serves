import Achievements from './Achievements/Achievements';
import './Home.scss';
import Landing from './Landing/Landing';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <Landing />
            <Achievements />
        </div>
    )
}

export default Home