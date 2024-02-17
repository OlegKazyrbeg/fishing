import classes from './about.module.scss'
import AboutTop from '../../components/pageBlocks/about/aboutTop/aboutContent'
import AboutTeam from '../../components/pageBlocks/about/aboutTeam/aboutTeam';
import AboutMap from '../../components/pageBlocks/about/aboutTeam/aboutMap/aboutMap';

const About = () => {
    return ( 
        <div className={classes.about}>
            <AboutTop/>
            <AboutTeam/>
            <AboutMap/>
        </div>
     );
}
 
export default About;