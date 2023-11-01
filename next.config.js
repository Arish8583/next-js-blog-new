// // const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// module.exports =  {
//       env: {
//         mongodb_username: 'arishv',
//         mongodb_password: 'DkZz90qMZovL8mWJ',
//         mongodb_clustername: 'cluster0',
//         mongodb_database: 'my-site',
//       },
//     };
  
 const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'arishv',
        mongodb_password: 'DkZz90qMZovL8mWJ',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'arishv',
      mongodb_password: 'DkZz90qMZovL8mWJ',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};