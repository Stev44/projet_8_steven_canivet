import './banner.scss'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Banner() {

    const [aboutBanner, setAboutBanner] = useState(false);
    const location = useLocation();

    if(location.pathname === '/about') {
        setAboutBanner(true)
    }
    return(
        <section className={aboutBanner ? 'about_banner' : 'home_banner'}>
            {!aboutBanner && <span>Chez vous, partout et ailleurs</span>}
        </section>
    )
}

export default Banner