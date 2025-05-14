import { HttpService } from "../services";
import {
  DataListResponse,
  DataCreateRequest,
  DataUpdateRequest,
  DataDeleteRequest,
  APIResponse
} from "./model";


export class TestService {
  private http: HttpService;

  constructor() {
    this.http = HttpService.getInstance();
  }

  getDataList = async ():Promise<DataListResponse> => {
    try {
      const res:DataListResponse = await this.http.get('api/test');
      return res || [];
    } catch (error) {
      console.error('Error fetching test list:', error);
      throw new Error('Failed to fetch test list');
    }
  }

  createData = async (data: DataCreateRequest):Promise<APIResponse> => {
    try {
      const res:APIResponse = await this.http.post('api/test', data);
      console.log(res);
      return res;
    } catch (error) {
      console.error('Error creating test:', error);
      throw new Error('Failed to create test');
    } 
  }

  updateData = async (data: DataUpdateRequest):Promise<APIResponse> => {
    try {
      const res:APIResponse = await this.http.put('api/test', data);
      console.log(res);
      return res;
    } catch (error) {
      console.error('Error creating test:', error);
      throw new Error('Failed to create test');
    } 
  }

  deleteData = async (data: DataDeleteRequest):Promise<APIResponse> => {
    try {
      const res:APIResponse = await this.http.delete('api/test', data);
      console.log(res);
      return res;
    } catch (error) {
      console.error('Error creating test:', error);
      throw new Error('Failed to create test');
    } 
  }
}

export const testService = new TestService();