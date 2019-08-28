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
        '@img/(.*)$': '<rootDir>/assets/img/$1',
        '@components/(.*)$': '<rootDir>/src/components/$1'
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',

        '\\.css$': '<rootDir>/testAssetsTransformer.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/testAssetsTransformer.js'
    }
};