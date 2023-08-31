import clsx from "clsx"
import styles from './Sidebar.module.scss'
import Logo from "./sidebar_content/logo/Logo"
import Menu from "./sidebar_content/menu/Menu"


const SideBar = () => {
    return (
        <div className={clsx(styles.sidebar_container)}> 
            <Logo />
            <Menu />
            
            <div>
                <h4 className={clsx(styles.sidebar_licence)}>
                    <div>@ 2023 VietNam</div>
                    <div>Created by Hung</div>
                </h4>
            </div>
        </div>
    )
}

export default SideBar