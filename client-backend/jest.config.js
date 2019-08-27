module.exports = {
    roots: ['./src'],
    setupFiles: ['./setupTests.ts'],
    collectCoverageFrom: ['./src/**.tsx'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};