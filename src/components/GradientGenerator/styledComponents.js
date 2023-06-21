import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  min-height: 105vh;
  margin-top: -22px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 26px;
  font-weight: 400;
`

export const SubTitle = styled.p`
  color: #ededed;
  text-align: center;
  font-size: 20px;
`

export const DirectionBtnContainer = styled.ul`
  margin-top: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin-top: 20px;
`

export const EachColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HexCode = styled.p`
  color: #ffffff;
  margin-bottom: 15px;
`

export const ColorInput = styled.input`
  border: 1px solid #334155;
  width: 80px;
  height: 40px;
`

export const GenerateBtn = styled.button`
  margin-top: 30px;
  height: 35px;
  width: 100px;
  border: none;
  border-radius: 5px;
  color: #1e293b;
  font-weight: bold;
  background-color: #00c9b7;
  cursor: pointer;
  outline: none;
`
