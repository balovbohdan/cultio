module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.tsx?'],

    roots: ['./src'],
    setupFiles: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ['node_modules'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],

    coveragePathIgnorePatterns: [
        'node_modules',
        '<rootDir>/src/server.ts'
    ],
    moduleNameMapper: {
        '@root/?(.*)$': '<rootDir>/src/$1',
        '@lib/?(.*)$': '<rootDir>/src/lib/$1',
        '@img/?(.*)$': '<rootDir>/assets/img/$1',
        '@endpoints/?(.*)$': '<rootDir>/src/endpoints/$1',
        '@components/?(.*)$': '<rootDir>/src/components/$1',
        '@routes/?(.*)$': '<rootDir>/src/components/routes/$1'
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',

        '\\.css$': '<rootDir>/__tests__/assetsTransformer.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__tests__/assetsTransformer.js'
    }
};