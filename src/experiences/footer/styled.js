import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 48px;
    width: 100%;
`;

export const Text = styled.p`
    font-size: 14px;
    color: ${props => props.theme.rainbow.palette.text.disabled};
`;
