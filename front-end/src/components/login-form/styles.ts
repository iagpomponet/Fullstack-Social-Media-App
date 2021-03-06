import styled from "styled-components";

export const Label = styled.label `
  font-weight: 700;
  margin: 10px 0;
  color: ${props => props.theme.colors.secondary};
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  margin: 10px 0;
  font-size: 16px;
  border-radius: ${props => props.theme.borderRadius};
  transition: 0.4s;

  &:hover {
    opacity: 0.7; 
    cursor: pointer;
  }
`



export const NewAccountLink = styled.span`
  margin: 10px 0;
  color: ${props => props.theme.colors.secondary};

  strong:hover {
    opacity: 0.7; 
    cursor: pointer;
  }
`