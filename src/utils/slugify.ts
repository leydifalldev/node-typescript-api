const slugify = require('slugify')

export default (item) => slugify(item, {
  lower: true,
  strict: true,
  remove: undefined,
});