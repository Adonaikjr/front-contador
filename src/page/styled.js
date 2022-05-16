import styled from 'styled-components';

export const Container = styled.div`

  width: 310px;
  height: 336px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap:15px;
`;

export const Content = styled.div`
  
  width: 321px;
  height:213px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  div{
    display: flex;
    justify-content: space-around;
  }
    
  
`
