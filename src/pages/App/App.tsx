import React, { useEffect, useState } from 'react';
import {
  Container, Form, FormButton, FormInput, Grid, GridColumn, Image, Title,
} from './App.style';

const App:React.ElementType = () => {
  const [photos, setPhotos] = useState<Array<any>>([]);

  useEffect(() => {
    const accessKey = process.env.REACT_APP_UNSPLASH_KEY;

    fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <Container>
      <Title>Unsplash Gallery</Title>
      <Form>
        <FormInput placeholder="Type a filter" />
        <FormButton>Search</FormButton>
      </Form>
      <Grid>
        <GridColumn>
          {
            photos.map((photo) => (
              <Image key={photo.id} src={photo.urls.raw} alt={photo.description} />
            ))
          }
        </GridColumn>
      </Grid>
    </Container>
  );
};

export default App;
