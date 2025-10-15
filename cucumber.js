module.exports = {
  default: [
    "--require", "utility/customWorld.js",        
    "--require", "utility/hooks.js",
    "--require", "features/step-definitions/*.js",
    "features/*.feature",
   
  ]
};
