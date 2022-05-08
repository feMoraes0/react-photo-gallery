import { PhotosService, PhotosServiceData, PhotosServiceRequest } from '../photos-service';

export default class FetchPhotosService implements PhotosService {
  async execute(request: PhotosServiceRequest): Promise<Array<PhotosServiceData>> {
    const { url, search } = request;
    console.log(`Soon will be used: ${search}`);

    const response = await fetch(url);

    const data = await response.json() as unknown as Array<any>;

    const handleResponse: Array<PhotosServiceData> = data.map((item) => {
      const { id, urls, description } = item;
      return {
        id,
        url: urls.raw,
        description,
      };
    });

    return handleResponse;
  }
}
