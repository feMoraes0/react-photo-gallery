import React, { useEffect, useState } from 'react';
import FetchPhotosService from '../../services/fetch/FetchPhotosService';
import GetPhotosUsecase from '../../usecase/get-photos-usecase';
import {
  Container, Form, FormButton, FormInput, Grid, GridColumn, Image, Title,
} from './App.style';

interface PhotosData {
  id: string,
  url: string,
  description?: string
}

const App:React.ElementType = () => {
  const photosService = new FetchPhotosService();
  const getPhotosUsecase = new GetPhotosUsecase(photosService);
  const [photos, setPhotos] = useState<Array<PhotosData>>([]);

  useEffect(() => {
    const accessKey = process.env.REACT_APP_UNSPLASH_KEY;
    const url = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

    getPhotosUsecase.execute({ url })
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
              <Image key={photo.id} src={photo.url} alt={photo.description} />
            ))
          }
        </GridColumn>
      </Grid>
    </Container>
  );
};

export default App;
