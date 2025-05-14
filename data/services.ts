import ky from 'ky';

interface HttpInstance {
  get<T>(url: string, options?: object): Promise<T>;
  post<T>(url: string, data: object, options?: object): Promise<T>;
  put<T>(url: string, data: object, options?: object): Promise<T>;
  delete<T>(url: string, data: object, options?: object): Promise<T>;
}

// 싱글톤 패턴을 사용하여 HttpService 인스턴스를 생성.
// HttpService.getInstance()를 호출하면 항상 같은 인스턴스를 반환.
export class HttpService implements HttpInstance {
  private static instance: HttpService;
  private readonly client: typeof ky;

  private constructor() {
    this.client = ky.create({
      prefixUrl: 'http://localhost:3000',
      timeout: 10000,
      retry: {
        limit: 1,
      },
    });
  }

  public static getInstance(): HttpService {
    if (!HttpService.instance) {
      HttpService.instance = new HttpService();
    }
    return HttpService.instance;
  }

  public async get<T>(url: string, options?: object): Promise<T> {
    return this.client.get(url, options).json();
  }

  public async post<T>(url: string, data: object, options?: object): Promise<T> {
    return this.client.post(url, { json: data, ...options }).json();
  }
  public async put<T>(url: string, data: object, options?: object): Promise<T> {
    return this.client.put(url, { json: data, ...options }).json();
  }
  public async delete<T>(url: string, data: object, options?: object): Promise<T> {
    return this.client.delete(url, { json: data, ...options }).json();
  }

  public async viewOptions() {
    console.log(this.client);
  }
}