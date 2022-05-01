import React from 'react';
import {
  Container, Form, FormButton, FormInput, Grid, GridColumn, Image, Title,
} from './App.style';

const App:React.ElementType = () => (
  <Container>
    <Title>Unsplash Gallery</Title>
    <Form>
      <FormInput placeholder="Type a filter" />
      <FormButton>Search</FormButton>
    </Form>
    <Grid>
      <GridColumn>
        <Image src="https://via.placeholder.com/150" />
        <Image src="https://via.placeholder.com/150x200" />
        <Image src="https://via.placeholder.com/150x100" />
        <Image src="https://via.placeholder.com/150x300" />
        <Image src="https://via.placeholder.com/150" />
        <Image src="https://via.placeholder.com/150" />
        <Image src="https://via.placeholder.com/150x400" />
        <Image src="https://via.placeholder.com/100x50" />
        <Image src="https://via.placeholder.com/150" />
        <Image src="https://via.placeholder.com/150" />
        <Image src="https://via.placeholder.com/150x200" />
        <Image src="https://via.placeholder.com/150x100" />
        <Image src="https://via.placeholder.com/150x300" />
        <Image src="https://via.placeholder.com/150" />
        <Image src="https://via.placeholder.com/150" />
        <Image src="https://via.placeholder.com/150x400" />
        <Image src="https://via.placeholder.com/100x50" />
        <Image src="https://via.placeholder.com/150" />
      </GridColumn>
    </Grid>
  </Container>
);

export default App;
