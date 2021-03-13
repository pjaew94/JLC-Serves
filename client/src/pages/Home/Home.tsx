import Achievements from './Achievements/Achievements';
import './Home.scss';
import Landing from './Landing/Landing';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import HowYouCanHelp from './HowYouCanHelp/HowYouCanHelp';
import SpecialThanks from './SpecialThanks/SpecialThanks';
import Contribute from './Contribute/Contribute';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <Landing />
            <Achievements />
            <WhoWeAre />
            <div className="what-we-do-and-how-we-can-help">
                <WhatWeDo />
                <HowYouCanHelp />
            </div>
            <Contribute />
            <SpecialThanks />
        </div>
    )
}

export default Home