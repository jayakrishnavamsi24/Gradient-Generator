import {DirectionBtn, DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, displayText, changeButton, isActive} = props

  const onChangeDirection = () => {
    changeButton(direction)
  }

  return (
    <DirectionItem>
      <DirectionBtn isActive={isActive} onClick={onChangeDirection}>
        {displayText}
      </DirectionBtn>
    </DirectionItem>
  )
}

export default GradientDirectionItem
