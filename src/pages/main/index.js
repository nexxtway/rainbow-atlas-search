import React, { useState } from 'react';
import { Column, RenderIf, Badge } from 'react-rainbow-components';
import Header from '../../experiences/header';
import Footer from '../../experiences/footer';
import {
    Container,
    SearchContainer,
    Label,
    SearchInput,
    TopContent,
    MoviesTable,
    LeftContent,
    SearchIcon,
} from './styled';
import fetchMovies from './fetchMovies';

const CustomBadge = ({ value }) => <Badge label={value} variant="lightest" />;
const LeftText = ({ value }) => <LeftContent>{value}</LeftContent>;

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
                        icon={<SearchIcon />}
                        iconPosition="right"
                        label="Access 23 000 movies on Mongo Atlas Search"
                        variant="shaded"
                        placeholder="Find Movie"
                    />
                </SearchContainer>
                <RenderIf isTrue={data.length > 0}>
                    <MoviesTable data={data} keyField="id" variant="listview">
                        <Column header="Title" field="title" component={LeftText} />
                        <Column header="Genre" field="genre" component={CustomBadge} width={160} />
                        <Column header="Plot" field="plot" component={LeftText} />
                    </MoviesTable>
                </RenderIf>
            </TopContent>
            <Footer />
        </Container>
    );
};

export default Home;
