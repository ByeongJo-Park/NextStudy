import { testService } from "./services";

import {
  DataCreateRequest,
  DataUpdateRequest,
  DataDeleteRequest,
} from "@/data/test/model";

const DataQueryOptions = {
  getList: () => ({
    queryKey: ["DataList"],
    queryFn: () => testService.getDataList(),
  })
}

const DataMutationOptions = {
  create: {
    mutationFn: (data: DataCreateRequest) => testService.createData(data),
  },
  update: {
    mutationFn: (data: DataUpdateRequest) => testService.updateData(data),
  },
  delete: {
    mutationFn: (data: DataDeleteRequest) => testService.deleteData(data),
  },
}

export { DataQueryOptions, DataMutationOptions };