module.exports = {
  name: 'ng-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
