import { AxiosRequestConfig } from 'axios';
import { Sender } from '../sender';
import { Callback } from '../callback';
import { IssueTypeDetails, IssueTypeDetails } from '../schemas';
export class IssueTypes {
  constructor(private readonly client: Sender) {}

  public async getAllIssueTypesForUser(callback?: Callback<any>): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/issuetype',
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  public async createIssueType(
    params: {
      name: string;
      description?: string;
      type?: string;
    },
    callback?: Callback<any>,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/issuetype',
      method: 'POST',
      data: {
        name: params.name,
        description: params.description,
        type: params.type,
      },
    };

    return this.client.sendRequest(request, callback);
  }

  public async getIssueType(
    params: {
      id: string;
    },
    callback?: Callback<IssueTypeDetails>,
  ): Promise<IssueTypeDetails> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issuetype/${params.id}`,
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  public async updateIssueType(
    params: {
      id: string;
      name?: string;
      description?: string;
      avatarId?: number;
    },
    callback?: Callback<IssueTypeDetails>,
  ): Promise<IssueTypeDetails> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issuetype/${params.id}`,
      method: 'PUT',
      data: {
        name: params.name,
        description: params.description,
        avatarId: params.avatarId,
      },
    };

    return this.client.sendRequest(request, callback);
  }

  public async deleteIssueType(
    params: {
      id: string;
      alternativeIssueTypeId?: string;
    },
    callback?: Callback<void>,
  ): Promise<void> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issuetype/${params.id}`,
      method: 'DELETE',
      params: {
        alternativeIssueTypeId: params.alternativeIssueTypeId,
      },
    };

    return this.client.sendRequest(request, callback);
  }

  public async getAlternativeIssueTypes(
    params: {
      id: string;
    },
    callback?: Callback<any>,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issuetype/${params.id}/alternatives`,
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  public async loadIssueTypeAvatar(
    params: {
      id: string;
      x?: number;
      y?: number;
      size: number;
      [key: string]: any;
    },
    callback?: Callback<any>,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issuetype/${params.id}/avatar2`,
      method: 'POST',
      params: {
        x: params.x,
        y: params.y,
        size: params.size,
      },
      data: {
        ...params,
        id: undefined,
        x: undefined,
        y: undefined,
        size: undefined,
      },
    };

    return this.client.sendRequest(request, callback);
  }
}