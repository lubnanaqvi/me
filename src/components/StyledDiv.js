import styled from 'styled-components';
const StyledDiv = styled.div`
  margin: auto;
  max-height: 300px;
  min-height: 200px;
  width: ${props => (props.expand ? '90%' : '50%')};
  overflow: ${props => (props.hideOverflow ? 'hidden' : 'visible')};
`;
export default StyledDiv;
