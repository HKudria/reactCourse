import { NavLink } from 'react-router-dom';
import image from '../../assets/image/404.jpg'
import s from './NotFoundPage.module.css';

export const NotFoundPage = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.image} src={image} alt='notFound' />
            <NavLink to='/'>
                <button className={s.button}>Return to main page</button>
            </NavLink>
        </div>
    )
}