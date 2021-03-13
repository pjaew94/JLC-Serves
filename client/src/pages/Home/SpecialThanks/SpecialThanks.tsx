import './SpecialThanks.scss';
import costcoLogo from '../../../media/costco.svg';
import mannaLogo from '../../../media/mannaImg.png';
import theSleepingBagProjectLogo from '../../../media/the-sleeping-bag.jpg';

const SpecialThanks: React.FC = () => {
    return (
        <div className='special-thanks'>
            <div className="special-text">Special <span>Thank You</span></div>
            <div className="logo-container">
                <div className="logo-wrapper">
                    <img src={costcoLogo} alt='costco' />
                </div>
                <div className="logo-wrapper">
                    <img src={mannaLogo} alt='manna on main street' />
                </div>
                <div className="logo-wrapper">
                    <img src={theSleepingBagProjectLogo} alt='the sleeping bag project' />
                </div>
            </div>
        </div>
    )
}

export default SpecialThanks
