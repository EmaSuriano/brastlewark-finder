import styled from 'styled-components';
import { ThemePropTypes } from 'shared/constants/theme';

const AppContainer = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  overflow-y: auto;
  min-width: 600px;
`;

AppContainer.propTypes = {
  theme: ThemePropTypes,
};

AppContainer.displayName = 'AppContainer';

export default AppContainer;
