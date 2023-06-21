import {Component} from 'react'

import {
  BgContainer,
  Title,
  SubTitle,
  DirectionBtnContainer,
  ColorsContainer,
  EachColorContainer,
  HexCode,
  ColorInput,
  GenerateBtn,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    tmpFirstColor: '#8ae323',
    tmpSecondColor: '#014f7b',
    isGenerated: true,
    direction: gradientDirectionsList[0].value,
    tmpDirection: gradientDirectionsList[0].value,
  }

  onChangeFirstColor = event => {
    this.setState({tmpFirstColor: event.target.value, isGenerated: false})
  }

  onChangeSecondColor = event => {
    this.setState({tmpSecondColor: event.target.value, isGenerated: false})
  }

  onGenerateClick = () => {
    this.setState(prevState => ({
      firstColor: prevState.tmpFirstColor,
      secondColor: prevState.tmpSecondColor,
      isGenerated: true,
      direction: prevState.tmpDirection,
    }))
  }

  changeButton = direction => {
    this.setState({tmpDirection: direction})
  }

  render() {
    const {
      firstColor,
      secondColor,
      tmpFirstColor,
      tmpSecondColor,
      direction,
      tmpDirection,
      isGenerated,
    } = this.state
    return (
      <BgContainer
        direction={direction}
        isGenerated={isGenerated}
        firstColor={firstColor}
        secondColor={secondColor}
        data-testid="gradientGenerator"
      >
        <Title>Generate a CSS Color Gradient </Title>
        <SubTitle>Choose Direction</SubTitle>
        <DirectionBtnContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              displayText={eachDirection.displayText}
              key={eachDirection.directionId}
              isActive={tmpDirection === eachDirection.value}
              direction={eachDirection.value}
              changeButton={this.changeButton}
            />
          ))}
        </DirectionBtnContainer>
        <SubTitle>Pick the Colors</SubTitle>
        <ColorsContainer>
          <EachColorContainer>
            <HexCode>{tmpFirstColor}</HexCode>
            <ColorInput
              type="color"
              value={tmpFirstColor}
              onChange={this.onChangeFirstColor}
            />
          </EachColorContainer>
          <EachColorContainer>
            <HexCode>{tmpSecondColor}</HexCode>
            <ColorInput
              type="color"
              value={tmpSecondColor}
              onChange={this.onChangeSecondColor}
            />
          </EachColorContainer>
        </ColorsContainer>
        <GenerateBtn type="button" onClick={this.onGenerateClick}>
          Generate
        </GenerateBtn>
      </BgContainer>
    )
  }
}

export default GradientGenerator
