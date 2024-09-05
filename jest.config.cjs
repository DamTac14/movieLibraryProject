module.exports = {
  projects: [
    {
      displayName: 'react-tests',
      testEnvironment: 'jsdom',
      transform: {
        '^.+\\.(js|jsx|ts|tsx|cjs)$': 'babel-jest',
      },
      moduleFileExtensions: ['js', 'cjs', 'jsx', 'ts', 'tsx'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
      },
      testMatch: ['<rootDir>/src/components/**/*.test.js']
    },
    {
      displayName: 'node-tests',
      testEnvironment: 'node',
      transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
      },
      moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
      transformIgnorePatterns: [
        "node_modules/(?!(your-package-name)/)"
      ],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
      },
      testMatch: ['<rootDir>/src/api/**/*.test.js']
    }
  ]
};
