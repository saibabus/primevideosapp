// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  return (
    <Slider slidesToShow={4} slidesToScroll={1} dots>
      {moviesList.map(eachMovie => (
        <MovieItem eachMovie={eachMovie} key={eachMovie.id} />
      ))}
    </Slider>
  )
}
export default MoviesSlider
