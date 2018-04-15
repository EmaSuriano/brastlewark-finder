import React from 'react';
import SpinnerSvg from 'react-svg-spinner';
import { withTheme } from 'styled-components';

const Spinner = ({ theme }) => <SpinnerSvg size="128px" color={theme.accent} />;

export default withTheme(Spinner);
