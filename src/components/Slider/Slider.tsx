import ReactSlider, { ReactSliderProps } from 'react-slider';
import './Slider.css';

const Slider = <T extends number | number[]>(props: ReactSliderProps<T>) => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="horizontal-thumb"
      trackClassName="horizontal-track"
      {...props}
    />
  );
};

export default Slider;
