import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  displayName: 'client',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testEnvironment: 'node',
  testMatch: ['**/**/**/*.test.ts'],
  coverageDirectory: './coverage',
  clearMocks: true,
  moduleNameMapper: {
    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/axios': '<rootDir>/src/utils/axios.ts'
  },
  restoreMocks: true,
  reporters: ['default'],
}

export default config