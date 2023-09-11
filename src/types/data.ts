export type typeHotAndUpdated = {
  id: string;
  chapter: string;
  time: string;
  name: string;
  imageUrl: string;
  slug: string;
};
export type dataChunkManga = typeHotAndUpdated[][];

export type chapter = {
  id: string;
  time: string;
  name: string;
  pathChapter: string;
};
export interface informationManga {
  id: string;
  imageUrl: string;
  name: string;
  infoDetail: {
    subName: string;
    category: {
      id: string;
      name: string;
      slug: string;
    }[];
    actor: string;
    status: string;
  };
  infoStatic: {
    time: string;
    review: string;
    view: string;
  };
  summary: string;
}

export interface detailManga extends informationManga {
  listChapter: chapter[];
}
