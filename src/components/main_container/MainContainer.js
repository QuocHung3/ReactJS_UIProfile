import { clsx } from 'clsx'

import styles from './MainContainer.module.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './main_content/home/Home'
import About from './main_content/about/About'
import Service from './main_content/service/Service'
import Portfolio from './main_content/portfolio/Portfolio'
import News from './main_content/news/News'
import Contact from './main_content/contact/Contact'

const MainContainer = () => {
    return(
        <div className={clsx(styles.main_container)}>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/service' element={<Service />}/>
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='/news' element={<News />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default MainContainer