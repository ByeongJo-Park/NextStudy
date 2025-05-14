import { DataQueryOptions, DataMutationOptions } from './queries'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export const useGetDataList = () => {
  return useQuery({...DataQueryOptions.getList()});
}

export const useCreateData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    ...DataMutationOptions.create,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['DataList']})
    },
  })
}

export const useUpdateData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    ...DataMutationOptions.update,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['DataList']})
    },
  })
}

export const useDeleteData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    ...DataMutationOptions.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['DataList']})
    },
  })
}
