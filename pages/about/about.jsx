import classes from './about.module.scss'
import AboutContent from '../../components/pageBlocks/about/aboutContent'

const About = () => {
    return ( 
        <div className={classes.about}>
            <AboutContent/>
        </div>
     );
}
 
export default About;