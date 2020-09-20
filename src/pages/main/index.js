import React, { useState } from 'react';
import { Column, RenderIf } from 'react-rainbow-components';
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
import fetchMovies from './fetchMovies';

const Home = () => {
    const [data, setData] = useState([]);
    const onQueryChange = async (event) => {
        const query = event.target.value;
        const data = await fetchMovies(query);
        setData(data);
    };
    return (
        <Container>
            <TopContent>
                <Header />
                <SearchContainer>
                    <Label>Find Movies</Label>
                    <SearchInput
                        label="Access 23 000 Movies on MongoAtlas search"
                        variant="shaded"
                        onChange={onQueryChange}
                    />
                </SearchContainer>
                <RenderIf isTrue={data.length > 0}>
                    <MoviesTable data={data} keyField="id" variant="listview">
                        <Column header="Title" field="title"/>
                        <Column header="Genre" field="genre"/>
                        <Column header="Plot" field="plot"/>
                    </MoviesTable>
                </RenderIf>    
            </TopContent>
            <Footer />
        </Container>
    );
};

export default Home;
