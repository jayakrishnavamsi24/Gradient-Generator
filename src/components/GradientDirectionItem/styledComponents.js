import styled from 'styled-components'

export const DirectionBtn = styled.button`
  height: 38px;
  width: 100%;
  max-width: 160px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 13px;
  background-color: ${props => (props.isActive ? '#ffffff' : '#ededed')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`

export const DirectionItem = styled.li`
  height: 38px;
  width: 45%;
  max-width: 160px;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 4px;
  margin-bottom: 4px;
`
