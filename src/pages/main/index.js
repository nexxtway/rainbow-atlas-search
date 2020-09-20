import React from 'react';
import { Column } from 'react-rainbow-components';
import Header from '../../experiences/header';
import Footer from '../../experiences/footer';
import {
    Container,
    SearchContainer,
    Label,
    SearchInput,
    TopContent,
    MoviesTable,
} from './styled';

const data = [
    {
        title: 'Harry Potter and the Philosopher Stone',
        description: 'Lorem Impsu dolor site lorem impsu dolor …',
        genre: 'Fantasy',
        id: '1234567890'
    },
    {
        title: 'Harry Potter and the Chamber of Secrets',
        description: 'Lorem Impsu dolor site lorem impsu dolor …',
        genre: 'Fantasy',
        id: '1234567891'
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        description: 'Lorem Impsu dolor site lorem impsu dolor …',
        genre: 'Fantasy',
        id: '1234567892'
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        description: 'Lorem Impsu dolor site lorem impsu dolor …',
        genre: 'Fantasy',
        id: '1234567893'
    },
];

const Home = () => {
    return (
        <Container>
            <TopContent>
                <Header />
                <SearchContainer>
                    <Label>Find Movies</Label>
                    <SearchInput
                        label="Access 23 000 Movies on MongoAtlas search"
                        variant="shaded" />
                </SearchContainer>
                <MoviesTable data={data} keyField="id" variant="listview">
                    <Column header="Title" field="title"/>
                    <Column header="Genre" field="genre"/>
                    <Column header="Description" field="description"/>
                </MoviesTable>
            </TopContent>
            <Footer />
        </Container>
    );
};

export default Home;
