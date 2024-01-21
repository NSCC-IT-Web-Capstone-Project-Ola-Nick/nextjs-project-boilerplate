/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const config: Config = {
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  

  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  // transform: {
  //   // Use babel-jest to transpile tests with the next/babel preset
  //   // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  //   '^.+\\.browser\\.test.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  //   // for .node.test.ts files please use node, maake matching pattern in testMatch
  //   '^.+\\.node\\.test.(js|jsx|ts|tsx)$': 'ts-jest',
  // },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],

  
}


// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
