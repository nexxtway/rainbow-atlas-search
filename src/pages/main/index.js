import React, { useState } from 'react';
import { Column, RenderIf, Badge } from 'react-rainbow-components';
import { Search } from '@rainbow-modules/icons'
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

const CustomBadge = ({ value }) => <Badge label={value} variant="lightest" />;

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
                        onChange={onQueryChange}
                        icon={<Search />}
                        iconPosition="right"
                        label="Access 23 000 movies on Mongo Atlas Search"
                        variant="shaded"
                    />
                </SearchContainer>
                <RenderIf isTrue={data.length > 0}>
                    <MoviesTable data={data} keyField="id" variant="listview">
                        <Column header="Title" field="title"/>
                        <Column header="Genre" field="genre" component={CustomBadge} />
                        <Column header="Plot" field="plot"/>
                    </MoviesTable>
                </RenderIf>
            </TopContent>
            <Footer />
        </Container>
    );
};

export default Home;
