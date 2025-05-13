import { z }  from 'zod';

export const TestSchema = z.object({
  id: z.number(),
  name: z.string(),
  code1: z.string(),
  code2: z.string(),
  code3: z.string(),
});

export type TestType = z.infer<typeof TestSchema>;