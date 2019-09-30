const { join, remove, trim, isEmpty } = require('lodash')

const pathify = (...args) => {
  const parsedArgs = remove(args.map(arg => trim(arg, "/")), a => !isEmpty(a));
  return `/${join(parsedArgs, "/")}/`;
};

module.exports = { pathify };
