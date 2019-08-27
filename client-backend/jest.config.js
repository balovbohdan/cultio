module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.tsx'],

    roots: ['./src'],
    setupFiles: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ['node_modules'],
    moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
    snapshotSerializers: ['enzyme-to-json/serializer'],

    coveragePathIgnorePatterns: [
        'node_modules',
        '<rootDir>/src/server.ts'
    ],
    moduleNameMapper: {
        '@root/(.*)$': '<rootDir>/src/$1',
        '@lib/(.*)$': '<rootDir>/src/lib/$1',
        "@components/(.*)$": "<rootDir>/src/components/$1"
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.js$': 'babel-jest'
    }
};