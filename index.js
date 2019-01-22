export default function deepFreezeCopy(o) {
  return Object.freeze(
    Object.keys(o).reduce((acc, key) => (
      acc[key] = typeof o[key] === 'object' && o[key] !== null
        ? deepFreezeCopy(o[key])
        : o[key] instanceof Date
          ? new Date(o[key])
          : o[key],
      acc
    ), Array.isArray(o) ? [] : {})
  )
}
