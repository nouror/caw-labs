module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js'
  },
  moduleFileExtensions: ['js','jsx','json','node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
};
