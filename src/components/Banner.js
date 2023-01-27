/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Mega from '../json/mega.json';

function Banner(){
    const imgURL = process.env.PUBLIC_URL + '/pokemon/';
    const randomPokemon = Mega[Math.floor(Math.random() * Mega.length)];
    const [currentPokemon, setCurrentPokemon] = useState(randomPokemon);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPokemon(Mega[Math.floor(Math.random() * Mega.length)]);
        }, 1000);     
        return () => clearInterval(intervalId);
    }, [currentPokemon]);

    return(
        <div className="banner">
            <div className="banner__container">
                <div className="banner__image">
                    <img src={ imgURL + currentPokemon.img} alt="a"/>
                </div>
                <div className="banner__content">
                    <span className="banner__title">Mega Eᴠolution</span>
                    <p className="banner__text">
                    Mega Eᴠolution là một khái niệm đượᴄ giới thiệu trong Thế hệ VI. Nó bao gồm một ѕố Pokemon nhất định đạt đượᴄ hình thứᴄ tối thượng ᴄủa ᴄhúng. Cáᴄ Pokemon ᴄần Mega Stone đặᴄ biệt để tiến hóa thành dạng ᴄuối ᴄùng ᴄho ᴄáᴄ họ tiến hóa một nhánh / tiến hóa ᴠà dạng ᴄuối ᴄùng ᴄho ᴄáᴄ họ tiến hóa hai. Ngoài ra, Pokemon ᴄhỉ ᴄó thể đạt đượᴄ hình dạng tối thượng ᴄủa ᴄhúng bằng ᴄáᴄh ѕử dụng Mega Stone duу nhất ᴄho loài ᴄủa ᴄhúng.
                    </p>
                    <div className="banner__btn">
                        <a className="banner__btn--dark" href="/home">More</a>
                        <a className="banner__btn--light" href="/home">See more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;