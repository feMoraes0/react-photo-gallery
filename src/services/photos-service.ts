export interface PhotosServiceRequest {
  url: string,
  search?: string
}

export interface PhotosServiceData {
  id: string,
  url: string,
  description?: string,
}

export interface PhotosService {
  execute: (request: PhotosServiceRequest) => Promise<Array<PhotosServiceData>>;
}
