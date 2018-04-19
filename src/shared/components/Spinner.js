import SpinnerSvg from 'react-svg-spinner';
import styled from 'styled-components';
import { ThemePropTypes } from 'shared/constants/theme';

const Spinner = styled(SpinnerSvg).attrs({
  size: '128px',
  color: props => props.theme.accent,
})``;

Spinner.propTypes = {
  theme: ThemePropTypes,
};

Spinner.displayName = 'Spinner';

export default Spinner;
