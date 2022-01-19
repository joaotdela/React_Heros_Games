import React from "react";
import './index.css';
import { tile_size } from '../../Settings/constants';
const Hero = () => {
    return (
        <div
            style={{
                width: tile_size,
                height: 100,
                backgroundImage: 'url(./assests/HERO.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                animation: 'hero-animation 0.75s steps(4) infinite',
                bottom: 48,
                left: 48 * 0,
            }}
        />
    );
}

export default Hero;