import styled from 'styled-components';

const GnomeListContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  padding-bottom: 30px; // end of the result
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 160px;
  justify-self: stretch;
  align-content: center;
`;

export default GnomeListContainer;
