'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_STUDENTS_URL: '"http://localhost:5002"',
  API_CLASSES_URL: '"http://localhost:5003"',
  API_TESTS_URL: '"http://localhost:5004"',
  API_SCHOOLS_URL: '"http://localhost:5005"',
  API_ADMIN_URL: '"http://localhost:7000"',
  STUDENT_APP_URL: '"http://localhost:8081"',
  OIDC_AUTHORITY: '"http://localhost:5000"',
  OIDC_CLIENT_ID: '"cooperation_school"',  
  OIDC_REDIRECT_URL: '"http://localhost:8082/static/callback.html"',
  OIDC_LOGOUT_REDIRECT_URL: '"http://localhost:8082/index.html"',
  OIDC_RESPONSE_TYPE: '"id_token token"',
  OIDC_SCOPE: '"openid profile roles email school_code cooperation_api"',
  STRIPE_KEY: '"pk_test_51HUTKNBOYIC9xp47DKKxFWj3MuCMjWQS1OF4fBNmDvvtSbLMBvMaB45wJNBo5fL0NgAC1AOuV8X29YZDfYxbeFp6005O8yk8S6"',
})