module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.yarn/**',
    '!**/dist/**',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).ts?(x)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    'jest-plugin-context/setup',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.yarn/',
    '<rootDir>/dist/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/.yarn/',
    '/dist/',
    '.storybook',

    '/__snapshots__/',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.yarn/',
    '/dist/',
    '.storybook',

    '.js',
    '.interfaces.',
    '.types.',
    '.stories.',
    '/__snapshots__/',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};