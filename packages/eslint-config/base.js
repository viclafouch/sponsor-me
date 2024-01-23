/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    '@viclafouch/eslint-config-viclafouch',
    '@viclafouch/eslint-config-viclafouch/imports',
    '@viclafouch/eslint-config-viclafouch/typescript',
    '@viclafouch/eslint-config-viclafouch/prettier'
  ].map(require.resolve),
  ignorePatterns: ['node_modules/', 'dist/']
}
