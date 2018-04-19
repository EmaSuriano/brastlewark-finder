import styled from 'styled-components';

const ProfessionTag = styled.span`
  border-radius: 2px;
  background-color: ${props => props.theme.accent}1A;
  border: 1px solid ${props => props.theme.accent}40;
  color: ${props => props.theme.secondary};
  display: inline-block;
  font-size: 0.9em;
  line-height: 1.4;
  margin-right: 5px;
  margin-top: 5px;
  padding: 3px;
`;

ProfessionTag.displayName = 'ProfessionTag';

export default ProfessionTag;
