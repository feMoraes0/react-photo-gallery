import { PhotosService } from '../services/photos-service';

interface GetPhotosUsecaseRequest {
  url: string,
  search?: string,
}

interface GetPhotosUsecaseData {
  id: string,
  url: string,
  description?: string,
}

export default class GetPhotosUsecase {
  private photosService: PhotosService;

  constructor(photosService: PhotosService) {
    this.photosService = photosService;
  }

  async execute(request: GetPhotosUsecaseRequest): Promise<Array<GetPhotosUsecaseData>> {
    const { url, search } = request;
    const response: Array<GetPhotosUsecaseData> = await this.photosService.execute({ url, search });
    return response;
  }
}
