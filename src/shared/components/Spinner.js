import React from 'react';
import styled from 'styled-components';
import SpinnerSvg from 'react-svg-spinner';
import { withTheme } from 'styled-components';

const Spinner = ({ theme }) => <SpinnerSvg size="128px" color={theme.accent} />;

export default withTheme(Spinner);
