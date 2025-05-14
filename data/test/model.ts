import { z }  from 'zod';

export const DataSchema = z.object({
  id: z.number(),
  name: z.string(),
  code1: z.string(),
  code2: z.string(),
  code3: z.string(),
});

export const DataListResponseSchema = z.object({
  data: z.array(DataSchema),
});

export const DataCreateRequestSchema = z.object({
  name: z.string(),
  code1: z.string(),
  code2: z.string(),
  code3: z.string(),
});

export const DataUpdateRequestSchema = z.object({
  name: z.string(),
  code1: z.string(),
  code2: z.string(),
  code3: z.string(),
});

export const DataDeleteRequestSchema = z.object({
  id: z.number(),
});

export const CommonsResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
  data: z.string().nullable(),
});

export type DataType = z.infer<typeof DataSchema>;
export type DataListResponse = z.infer<typeof DataListResponseSchema>['data'];
export type DataCreateRequest = z.infer<typeof DataCreateRequestSchema>;
export type DataUpdateRequest = z.infer<typeof DataUpdateRequestSchema>;
export type DataDeleteRequest = z.infer<typeof DataDeleteRequestSchema>;
export type APIResponse = z.infer<typeof CommonsResponseSchema>;
