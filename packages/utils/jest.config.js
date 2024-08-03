module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coveragePathIgnorePatterns: ["/node_modules/", "/test/"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  testMatch: ["<rootDir>/test/**/*.test.{js,jsx}"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
