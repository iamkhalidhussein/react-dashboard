import moon from '../../assets/moon.svg';
import circle from '../../assets/circle.svg';

export const DarkMode = () => {
    return (
        <div className='bg-[#696FFB] flex cursor-pointer rounded-full px-1 py-0.5 gap-1.5 mt-2'>
            <img src={circle} alt="circle" />
            <img src={moon} alt="moon" />
        </div>
    )
};