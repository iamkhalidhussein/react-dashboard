import sun from '../../assets/sun.svg';
import circle from '../../assets/circle.svg';

export const LightMode = () => {
    return (
        <div className='bg-[#696FFB] flex cursor-pointer rounded-full px-1 py-0.5 gap-1'>
            <img src={sun} alt="sun" />
            <img src={circle} alt="circle" />
        </div>
    )
};