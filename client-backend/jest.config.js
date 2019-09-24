module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],

    roots: ['./src'],
    testPathIgnorePatterns: ['node_modules'],
    setupFiles: ['<rootDir>/__tests__/setup.ts'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    setupFilesAfterEnv: ['<rootDir>/__tests__/setupAfterEnv.js'],

    coveragePathIgnorePatterns: [
        'index.js',
        'index.ts',
        'node_modules',
        '<rootDir>/src/server.ts',
        '<rootDir>/src/lib/server-starter/starter.ts'
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