import {faHome,faUser,faGear,faEnvelope,faBriefcase,faFile} from '@fortawesome/free-solid-svg-icons'

const menuItem = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,
        link: ''
    },
    {
        id: 2,
        name: 'About',
        icon: faUser,
        link: 'about'
    },
    {
        id: 3,
        name: 'Service',
        icon: faGear,
        link: 'service'
    },
    {
        id: 4,
        name: 'Portfolio',
        icon: faBriefcase,
        link: 'portfolio'
    },
    {
        id: 5,
        name: 'News',
        icon: faFile,
        link: 'news'
    },
    {
        id: 6,
        name: 'Contact',
        icon: faEnvelope,
        link: 'contact'
    },
]

export {menuItem}