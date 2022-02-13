module.exports = {
  apps: [
    {name: 'server',script: 'dist/main.js',cwd:"",instances:2,exec_mode:"cluster","watch":false},
  ]
};