import {environment} from '../../environments/environment';

export class Urls {
  private static baseUrl = environment.apiUrl;
  public static login = Urls.baseUrl + 'auth/login';
  public static logout = Urls.baseUrl + 'auth/logout';
  public static product = Urls.baseUrl + 'getProduct/';
}
