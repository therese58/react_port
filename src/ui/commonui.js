import styled from 'styled-components';

export const Utilicon = styled.button`

  background-color: ${(props) => props.bgcolor || '#4CAF50'};
  color: ${(props) => props.fontcolor || 'white'};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family : bootstrap-icons !important;

  &:hover {
    background-color: ${(props) => props.hoverBgColor || '#45a049'};
  }
  &::before {
    content: "${(props) => props.iconcode || '\\f65b'};"
    margin-right: 5px; 
  }
`;

export const Btn = styled.button`

  background-color: ${(props) => props.bgcolor || '#4CAF50'};
  color: ${(props) => props.fontcolor || 'white'};
  padding: 10px 20px;
  border: 3px solid red;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBgColor || '#45a049'};
  }
`;