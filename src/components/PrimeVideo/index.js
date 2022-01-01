// Write your code

import {
  Primevideocontainer,
  MoviesContainer,
  ImageOfPrime,
  Heading,
} from './styledComponents'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachmovie => eachmovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachmovie => eachmovie.categoryId === 'COMEDY',
  )

  return (
    <Primevideocontainer>
      <ImageOfPrime
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer>
        <Heading>Action Movies</Heading>
        <MoviesSlider moviesList={actionMovies} />
        <Heading>Comedy Movies</Heading>
        <MoviesSlider moviesList={comedyMovies} />
      </MoviesContainer>
    </Primevideocontainer>
  )
}
export default PrimeVideo
