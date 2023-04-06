export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
  Title: string;
  Slug: string;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}

export interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}
export interface IArticlesAttribute {
  Title: string;
  body: string;
  slug: string;
  Image: IImageData;
  createdAt: string;
  author: IAuthor;
  shortDescription: string;
}

export interface IArticle {
  id: number;
  attributes: IArticlesAttribute;
}
