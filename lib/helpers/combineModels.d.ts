import { DMMF } from '@prisma/generator-helper';
/**
 *
 * @param rawModels A list of Prisma models to combine in a way that doesn't duplicate fields
 * @returns A list of Prisma Models
 */
export declare function combineModels(rawModels: DMMF.Model[]): DMMF.Model[];
