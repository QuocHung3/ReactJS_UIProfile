import clsx from "clsx"
import { useState } from "react"

import { menuItem } from "../../../global/components/constant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './Menu.module.scss'
import { Link } from "react-router-dom"


const Menu = () => {
    const [idActice,setIdActive] = useState(1)

    const handleClickItem = (id) => {
        setIdActive(id)
    }
    return (
        <nav>
            <ul className={clsx(styles.menu_list)}>
                {menuItem && menuItem.map((item) => (
                    <li key={item.id} className={clsx(styles.menu_item)} onClick={() => handleClickItem(item.id)}>
                        <Link to={item.link} className={clsx(styles.menu_link,{[styles.active]: idActice === item.id})} ><FontAwesomeIcon className={clsx(styles.menu_icon)} icon={item.icon} /> {item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu