/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,

  coverageProvider: "v8",

  roots: [
    '<rootDir>/src'
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: '<rootDir>/src/**/*.ts',
  testEnviroment: 'node',
  transform: {
    '.\\.ts$': 'ts-jest'
  }


};

module.exports = config;
