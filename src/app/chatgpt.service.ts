import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

  constructor(private HttpClient: HttpClient) {

  }

  url: string = 'https://api.openai.com/v1/chat/completions';
  key: string = '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';
  model: string = 'gpt-3.5-turbo'

  Generate(): Observable<any> {
    return this.HttpClient.request('POST', this.url, {
      headers: {
        Authorization: `Bearer ${this.key}`,
        "Content-Type": `application/json`,
      },
      body: {
        model: this.model,
        temperature: 1.2,
        messages: [{
            role: 'system',
            content: 'You are a helpful AI assistant acting as a multiple michellin star chef with the sole goal of generating high quality but unique random recipes that would belong in a restaurant. Responses must always be a full recipe starting with the title on the first line, followed by two new lines, followed by the recipe in online format.'
          },
          {
            role: 'user',
            content: 'Generate a recipe.'
          }
        ]
      }
    });
  }
}
