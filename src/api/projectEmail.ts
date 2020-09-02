import { AxiosRequestConfig } from 'axios';
import { Sender } from '../sender';
import { Callback } from '../callback';
import { ProjectEmailAddress } from '../schemas';
export class ProjectEmail {
  constructor(private readonly client: Sender) {}

  public async getProjectsSenderEmail(
    params: {
      projectId: number;
    },
    callback?: Callback<ProjectEmailAddress>,
  ): Promise<ProjectEmailAddress> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/project/${params.projectId}/email`,
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  public async setProjectsSenderEmail(
    params: {
      projectId: number;
      emailAddress?: string;
    },
    callback?: Callback<void>,
  ): Promise<void> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/project/${params.projectId}/email`,
      method: 'PUT',
      data: {
        emailAddress: params.emailAddress,
      },
    };

    return this.client.sendRequest(request, callback);
  }
}