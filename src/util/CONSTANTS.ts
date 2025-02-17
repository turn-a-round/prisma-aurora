export const CONFIG_FILE_NAME = 'aurora.config.json';
export const ERRORS = {
  INVALID_CONFIG_FILE: 'Invalid Config File',
  EMPTY_CONFIG_FILES: 'No Schema Files Defined',
  NO_OUTPUT_CONFIGURED: 'No Output Location Provided',
  NON_PRISMA_FILE: 'Non-Prisma file provided',
  INVALID_SCHEMA: 'There was an issue with at least one of your schemas'
};
export const VALID_FIELD_KINDS = ['scalar', 'object', 'enum'];

export const UNSUPPORTED_DATASOURCE_FIELDS = ['shadowDatabaseUrl', 'referentialIntegrity'];

export const DATASOURCE_FIELDS = ['provider', 'url', 'shadowDatabaseUrl', 'referentialIntegrity'];
export const GENERATOR_FIELDS = [
  'provider',
  'output',
  'binaryTargets',
  'previewFeatures',
  'engineType'
];
