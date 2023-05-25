import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img/meter1.svg';
import img2 from '../assets/img/meter2.svg';
import img3 from '../assets/img/meter3.svg';


const MyCarousel = () => {
    return (
      <Carousel>
        <div>
          <img src={img1} alt="Slide 1" className='w-25 m-2' />
          <img src={img2} alt="Slide 2" className='w-25 m-2' />
          <img src={img3} alt="Slide 3" className='w-25 m-2' />
        </div>
        <div>
          <img src={img1} alt="Slide 1" className='w-25 m-2' />
          <img src={img2} alt="Slide 2" className='w-25 m-2' />
          <img src={img3} alt="Slide 3" className='w-25 m-2' />
        </div>
        <div>
          <img src={img1} alt="Slide 1" className='w-25 m-2' />
          <img src={img2} alt="Slide 2" className='w-25 m-2' />
          <img src={img3} alt="Slide 3" className='w-25 m-2' />
        </div>
      </Carousel>
    );
  };
  
  export default MyCarousel;
  