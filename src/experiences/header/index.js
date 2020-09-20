import React from 'react';
import GitHubIcon from '../../components/icons/github';
import Logo from '../../components/icons/rainbowLogo';
import {
    Container,
    GitHubLink,
} from './styled';

const Header = () => {
    return (
        <Container>
            <Logo />
            <GitHubLink href="https://github.com/nexxtway/rainbow-atlas-search" target="_blank">
                <GitHubIcon />
            </GitHubLink>
        </Container>
    );
};

export default Header;
