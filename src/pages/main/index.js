import React, { useState } from 'react';
import { Column, RenderIf, Badge } from 'react-rainbow-components';
import { FormattedDate } from 'react-intl';
import Header from '../../experiences/header';
import Footer from '../../experiences/footer';
import {
    Container,
    SearchContainer,
    Label,
    SearchInput,
    TopContent,
    MoviesTable,
    LeftText,
    SearchIcon,
    LeftContent,
    BrandFooter,
    SearchText,
    MongoDBLogo,
} from './styled';
import fetchMovies from './fetchMovies';

const Rated = ({ value }) => (
    <RenderIf isTrue={value}>
        <LeftContent>
            <Badge label={value} variant="lightest" />
        </LeftContent>
    </RenderIf>
);

const Genres = ({ value }) => {
    if (Array.isArray(value)) {
        return (
            <LeftContent>
                {(value.map(gen => <Badge key={gen} label={gen} variant="lightest" />))}
            </LeftContent>
        )
    }
    if (value && typeof value === 'string') {
        return (
            <LeftContent>
                <Badge label={value} variant="lightest" />
            </LeftContent>
        );
    }
    return null;
}

const Date = ({ value }) =>(
    <LeftText>
        <FormattedDate
            value={value}
            year="numeric"
            month="short"
            day="2-digit"
            />
    </LeftText>
);

const Text = ({ value }) => <LeftText>{value}</LeftText>;

const boldStyles = {
    fontWeight: 800,
}

function getNormalizedData(data) {
    return data.map((row, index) => {
        const higligthed = row.highlights.reduce((acc, value) => {
            const { path, texts } =  value;
            return {
                ...acc,
                [path]: <span>{texts.map((string, index) => {
                    const key = `row-${index}`;
                    if (string.type === 'hit') {
                        return <b style={boldStyles} key={key}>{string.value}</b>;
                    }
                    return string.value;
                })}</span>
            }
        }, {});
        const key = `row-${index}`;
        return {
            ...row,
            ...higligthed,
            key,
        }
    });
}


const Home = () => {
    const [data, setData] = useState([]);
    const onQueryChange = async (event) => {
        const query = event.target.value;
        const data = await fetchMovies(query);
        setData(getNormalizedData(data));
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
                        label="Access 23 530 movies on MongoDB Atlas Search"
                        variant="shaded"
                        placeholder="Find Movie"
                        type="search"
                    />
                </SearchContainer>
                <RenderIf isTrue={data.length > 0}>
                    <MoviesTable data={data} keyField="key" variant="listview">
                        <Column header="Title" field="title" component={Text} />
                        <Column header="Released" field="released" component={Date} width={140} />
                        <Column header="Genre" field="genres" component={Genres} />
                        <Column header="Rated" field="rated" component={Rated} width={160} />
                        <Column header="Plot" field="plot" component={Text} />
                    </MoviesTable>
                </RenderIf>
                <BrandFooter>
                    <SearchText>Search by</SearchText>
                    <MongoDBLogo />
                </BrandFooter>
            </TopContent>
            <Footer />
        </Container>
    );
};

export default Home;
