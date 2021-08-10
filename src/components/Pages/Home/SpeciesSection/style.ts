import styled from "styled-components";
import Button from 'react-bootstrap/Button';

export const Container = styled.div`
    background-color: grey;
    height: 1800px;
    color: black;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;  
`;

export const Paginator = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;
`;
export const PreviousBtn = styled(Button)`
    margin: 1rem;
`;
export const NextBtn = styled(Button)`
    margin: 1rem;
`;
