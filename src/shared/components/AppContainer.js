import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background: ${props => props.theme.background};
  height: 100vh;
  overflow-y: auto;
  min-width: 600px;
`;

export default AppContainer;
