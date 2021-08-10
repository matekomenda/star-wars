import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai';

export const Container = styled.div`
    background-color: black;
    height: 450px;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100%;
    width: 100%;
`;

export const StyledInput = styled.input`
    width: 50%;
    height: 2rem;
    border-radius: 40px;
    border: none;
    padding-left: 1rem;
    &:focus{
        outline: none;
    }
    &::placeholder{
        //padding-left: 1rem;
    }
`;

export const SearchIcon = styled(AiOutlineSearch)`
    color: white;
    width: 2rem;
    height: 2rem;
`;