import { heroAPI } from '../api/hero.api';
import type { SummaryInformationResponse } from '../interfaces/summaryInformation.response.interface';

export const getSummaryAction =
  async (): Promise<SummaryInformationResponse> => {
    const { data } = await heroAPI.get<SummaryInformationResponse>('/summary');

    return data;
  };
