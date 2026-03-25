pipeline {
  agent any 

   triggers {
        githubPush()
   }
  stages {
      stage ('install') {
          steps {
             sh'npm install'
              }
           }
      stage ('test') {
          steps {
              sh'npm test'
               }
            }
         }
      }
