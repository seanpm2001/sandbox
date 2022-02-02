let cli = require('./index.js')

/**
 * CLI entry for @architect/architect caller
 *   Same as the CLI caller, but needs to do less
 */
module.exports = function arcCalling () {
  cli({
    disableBanner: true,
    needsValidCreds: false,
    runtimeCheck: 'warn',
  },
  function _done (err) {
    if (err) {
      console.log(err)
      process.exit(1)
    }
  })
}
