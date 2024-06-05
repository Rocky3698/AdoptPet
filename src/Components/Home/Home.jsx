
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Services from './Services/Services';
import Icon from './Icon';
import Pricing from './Pricing';
import Reviews from './Reviews';
import Footer from './Footer';
import Contact from '../Contact';
import Team from '../Team';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Icon></Icon>
            <Services></Services>
            <Icon></Icon>
            <Pricing></Pricing>
            <Reviews></Reviews>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;