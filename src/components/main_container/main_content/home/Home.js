import { clsx } from 'clsx'
import { useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faTwitter,faInstagram,faDribbble,faTiktok } from '@fortawesome/free-brands-svg-icons'
import ReactTyped from 'react-typed';

import styles from './Home.module.scss'
import avatar from '../../../../assets/imgs/bmad.jpg'
import Loading from '../../../global/components/loading/Loading';


const Home = () => {
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    },[])

    // props support animation fade left
    const props = useSpring({
        opacity: 1,
        transform: "translate(0px, 0px)",
        config: {
            duration: 400
        },
        from: { opacity: 0, transform: "translate(-60px, 0px)" }
      });

    return(
            <div>
                {isLoading ? <Loading /> :
                    <animated.div style={props} >
                        <div className={clsx(styles.home_container)}>
                            <div className={clsx(styles.home_imgContainer)}>
                                <img className={clsx(styles.home_img)} src={avatar} alt=''/>
                            </div>
                            <div className={clsx(styles.home_contentContainer)}>
                                <h1 className={clsx(styles.home_name)}>ARIANO SMITH</h1>
                                <ReactTyped 
                                    className={clsx(styles.home_job)}
                                    strings={[
                                        "Photographer",
                                        "Devoloper",
                                        "Investgation Reporter"
                                    ]}
                                    typeSpeed={90}
                                    backSpeed={40}
                                    // startDelay={500}
                                    backDelay={1000}
                                    loop
                                />
                                {/* <h2 className={clsx(styles.home_job)}>Photographer</h2> */}
                                <p className={clsx(styles.home_desc)}>Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
                                <ul className={clsx(styles.home_iconContainer)}>
                                    <li className={clsx(styles.icon_item)}><a className={clsx(styles.icon_link)} href='/'><FontAwesomeIcon icon={faFacebook} /></a></li>
                                    <li className={clsx(styles.icon_item)}><a className={clsx(styles.icon_link)} href='/'><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li className={clsx(styles.icon_item)}><a className={clsx(styles.icon_link)} href='/'><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li className={clsx(styles.icon_item)}><a className={clsx(styles.icon_link)} href='/'><FontAwesomeIcon icon={faDribbble} /></a></li>
                                    <li className={clsx(styles.icon_item)}><a className={clsx(styles.icon_link)} href='/'><FontAwesomeIcon icon={faTiktok} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </animated.div> 
                }
            
            </div>
            
    )
}

export default Home