import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

const prismaMock = mockDeep<PrismaClient>();

export { prismaMock };

// Optionally, you can export the original PrismaClient type for TypeScript type checking.
export type { PrismaClient };
