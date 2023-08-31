import clsx from "clsx"
import styles from './Logo.module.scss'


const Logo = () => {
    return (
        <div> 
            <div className={clsx(styles.sb_logo_container)}>
                <a className={clsx(styles.sb_logo_link)} href="/"><h2 className={clsx(styles.sb_logo)}>INFOMATION</h2></a>
            </div>
        </div>
    )
}

export default Logo