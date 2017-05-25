import { Injectable, Inject } from '@angular/core';

import { Prismic } from 'prismic.io';


const PREVIEW_EXPIRES: number = 30*60*1000; // 30 minutes

@Injectable()
export class PrismicService {
  constructor(
    @Inject('PrismicEndpoint') private endpoint: string,
    @Inject('PrismicAccessToken') private accessToken: string,
    
   
  ) {}

  api(): Promise<any> {
    return Prismic.api(this.endpoint, {
      accessToken: this.accessToken
    });
  }
 

  setRef(token: string) {
    document.cookie = `${Prismic.previewCookie}=${token}; expires=${PREVIEW_EXPIRES}`;
  }
  

  preview(token: string): Promise<string> {
    return this.api().then((api) => {
      return api.previewSession(token, '/').then((url: string) => {
        this.setRef(token);
        return url;
      });
    });
  }

}
