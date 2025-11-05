export interface ITunesMusic {
    wrapperType: string;
    artworkUrl100: string;
    artistName: string;
    collectionCensoredName: string;
    trackViewUrl: string;
    collectionId: number;
}

export interface ITunesResult {
    resultCount: number
    results: ITunesMusic[]
}

export interface BasketIcon {
    aimodel_id: number,
    datasets_count: number,
}

export const getMusicByName = async (name = ""): Promise<ITunesResult> => {
  return fetch(`https://itunes.apple.com/search?term=${name}`)
  .then((response) => response.json());
};

export const getAlbumById = async (
  id: number | string
): Promise<ITunesResult> => {
  return fetch(`https://itunes.apple.com/lookup?id=${id}`).then(
    (response) => response.json()
  );
};

export const getBasketIcon = async (): Promise<BasketIcon> => {
  return fetch(`${API_BASE}/aimodel/basket-icon/`)
    .then(response => response.json())
    .catch((error) => {
      console.error('Error fetching basket icon:', error);
      return {
        aimodel_id: 0, 
        datasets_count: 0,
      };
    });
};


// =============================  datasetsApi.ts  ==================================

import type { Dataset } from "../components/DatasetCard/DatasetCard";

// Базовый URL для API (будет проксироваться через Vite)
const API_BASE = '/api';


export const getDatasets = async (name = ""): Promise<Dataset[]> => {
  return fetch(`${API_BASE}/datasets/?search-model=${name}`)
  .then((response) => response.json());
};

export const getDatasetById = async (
  id: number | string
): Promise<Dataset> => {
  return fetch(`${API_BASE}/datasets/${id}/`).then(
    (response) => response.json()
  );
};
