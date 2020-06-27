module.exports = {
  roots: ['<rootDir>/src</rootDir>'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts': 'ts-jest'
  }
}
