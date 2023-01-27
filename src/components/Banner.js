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
        }, 5000);     
        return () => clearInterval(intervalId);
    }, [currentPokemon]);

    return(
        <div className="banner">
            <div className="banner__container">
                <div className="banner__image">
                    <img src={ imgURL + currentPokemon.img} alt="a"/>
                </div>
                <div className="banner__content">
                    <span className="banner__title text-neon-info">Mega Evolution</span>
                    <p className="banner__text">
                    Mega Evolution là một khái niệm đượᴄ giới thiệu trong Thế hệ VI. Nó bao gồm một ѕố Pokemon nhất định đạt đượᴄ hình thức tối thượng của chúng. Các Pokemon cần Mega Stone đặc biệt để tiến hóa thành dạng cuối cùng ᴄho ᴄáᴄ họ tiến hóa một nhánh / tiến hóa ᴠà dạng cuối cùng cho các họ tiến hóa hai. Ngoài ra, Pokemon chỉ có thể đạt được hình dạng tối thượng của chúng bằng cách ѕử dụng Mega Stone duy nhất cho loài của chúng.
                    </p>
                    <div className="banner__btn">
                        <a className="banner__btn--neon btn-neon-yellow" href="/home">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;