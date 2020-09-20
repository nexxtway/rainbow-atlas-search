import React from 'react';
import {
    Container,
    Text,
} from './styled';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <Container>
            <Text>
                © Copyright Nexxtway {year}
            </Text>
        </Container>
    );
};

export default Footer;
