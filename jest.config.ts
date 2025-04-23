import type { Config } from "jest";

const config: Config = {
  rootDir: "./",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    '\\.module\\.(css|scss|sass)$': 'identity-obj-proxy',
    '\\.(css|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/mocks/fileMock.js",
  },
};

export default config;
