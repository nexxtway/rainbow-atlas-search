import styled from 'styled-components';
import { Input, Table } from 'react-rainbow-components';
import { Search } from '@rainbow-modules/icons'
import MongoDB from '../../components/icons/mongoDB';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
    background: #F4F6F9;
`;

export const TopContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
`;

export const SearchContainer = styled.div`
    width: 80%;
    align-self: center;
    margin-top: 32px;

    @media (max-width: 650px) {
        width: 90%;
    }
`;

export const SearchInput = styled(Input)`
    width: 60%;
    margin: 0 auto 24px auto;

    @media (max-width: 650px) {
        width: 100%;
    }

    input {
        height: 52px;
        margin-top: 8px;
    }
`;

export const SearchIcon = styled(Search)`
    margin-top: 6px;
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
    width: 90%;
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    border-bottom: 1px solid ${props => props.theme.rainbow.palette.border.divider};
`;

export const LeftText = styled.p`
    text-align: left;
    margin: 0 16px;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const LeftContent = styled.div`
    display: flex;
    padding: 8px;
`;

export const BrandFooter = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 12px;
`;

export const SearchText = styled.p`
    font-size: 16px;
    color: ${props => props.theme.rainbow.palette.text.label};
    margin-right: 8px;
    margin-bottom: 4px;
`;

export const MongoDBLogo = styled(MongoDB)`
    width: 150px;
    height: 36px;
`;
