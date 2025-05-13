import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { TestSchema } from '@/data/test/model'
import type { TestType } from '@/data/test/model'

export const useTestList = () => {
  return useQuery<TestType[]>({
    queryKey: ['testList'],
    queryFn: async () => {
      const res = await fetch('/api/test')
      if (!res.ok) throw new Error('데이터 요청 실패')

      const json = await res.json()

      const parsed = z.array(TestSchema).safeParse(json)
      if (!parsed.success) {
        console.error('[❌ Zod 실패]', parsed.error)
        throw new Error('스키마 불일치로 인해 파싱 실패')
      }
      return parsed.data
    },
  })
}

export const useTestCreate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: TestType) => {
      const res = await fetch('/api/test', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('데이터 요청 실패')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['testList']})
    },
  })
}

export const useTestUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: TestType) => {
      const res = await fetch(`/api/test`, {
        method: 'PUT',
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('데이터 요청 실패')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['testList']})
    },
  })
}

export const useTestDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: TestType) => {
      console.log(data)
      const res = await fetch(`/api/test`, {
        method: 'DELETE',
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('데이터 요청 실패')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['testList']})
    },
  })
}