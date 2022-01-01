// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {
  Thumbnailimg,
  CloseButton,
  PlayerContainer,
  ModelConta,
} from './styledComponents'
import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl, videoUrl} = eachMovie

  return (
    <div>
      <Popup
        modal
        trigger={<Thumbnailimg src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <ModelConta>
            <CloseButton
              type="button"
              data-testId="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </CloseButton>
            <PlayerContainer>
              <ReactPlayer url={videoUrl} controls />
            </PlayerContainer>
          </ModelConta>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
