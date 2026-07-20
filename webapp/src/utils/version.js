// Version comparison + discovery helpers. Pure — ported from ViewModel.js.

// Returns true when `test` is strictly a later version than `existing`.
// Minor "x" (e.g. "7.x") is treated as 999 so "7.x" covers any 7.minor.
export function sinceIsGreater(test, existing) {
  if (test === existing) return false
  const testVersion = test.split('.')
  const existingVersion = existing.split('.')

  if (testVersion[1] == 'x') testVersion[1] = 999
  if (existingVersion[1] == 'x') existingVersion[1] = 999

  if (parseInt(testVersion[0]) < parseInt(existingVersion[0])) return false
  if (
    testVersion[0] === existingVersion[0] &&
    parseInt(testVersion[1]) < parseInt(existingVersion[1])
  ) {
    return false
  }
  return true
}

const MEMBER_KEYS = ['constructors', 'properties', 'methods', 'operators', 'fields']

// Highest `since` across every member in the dataset (e.g. "8.12").
export function mostRecentSince(apiInfo) {
  let since = '0.0'
  apiInfo.forEach((type) => {
    MEMBER_KEYS.forEach((key) => {
      if (!type[key]) return
      type[key].forEach((m) => {
        if (m.since && sinceIsGreater(m.since, since)) since = m.since
      })
    })
  })
  return since
}

// Sorted descending list of major versions as "N.x" (e.g. ["8.x","7.x",...]).
export function majorVersionList(apiInfo) {
  const majors = new Set()
  apiInfo.forEach((type) => {
    MEMBER_KEYS.forEach((key) => {
      if (type[key]) {
        type[key].forEach((m) => {
          if (m.since) majors.add(parseInt(m.since.split('.')[0]))
        })
      }
    })
  })
  return [...majors].sort((a, b) => b - a).map((n) => `${n}.x`)
}
