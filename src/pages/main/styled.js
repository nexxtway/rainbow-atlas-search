import styled from 'styled-components';
import { Input, Table } from 'react-rainbow-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    background: #F4F6F9;
`;

export const TopContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const SearchContainer = styled.div`
    width: 80%;
    align-self: center;
`;
export const SearchInput = styled(Input)`
    width: 60%;
    margin: 0 auto 100px auto;
`;

export const Label = styled.h1`
    margin-top: 0;
    transition: all 350ms ease;
    font-family: Montserrat, sans-serif;
    font-size: 40px;
    line-height: 1em;
    font-weight: 400;
    margin-bottom: 24px;
    letter-spacing: 1.6px;
    color: ${props => props.theme.rainbow.palette.text.main};
    text-align: center;
`;

export const MoviesTable = styled(Table)`
    width: 80%;
    margin: 0 auto;
`;
