import Achievements from './Achievements/Achievements';
import './Home.scss';
import Landing from './Landing/Landing';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <Landing />
            <Achievements />
            <WhoWeAre />
        </div>
    )
}

export default Home