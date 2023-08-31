import { Hypnosis } from "react-cssfx-loading"
import clsx from "clsx"

import styles from './Loading.module.scss'

const Loading = () => {
    return (
        <div className={clsx(styles.loading_container)}>
            <Hypnosis width='80px' height='80px'/>
        </div>
    )
}

export default Loading