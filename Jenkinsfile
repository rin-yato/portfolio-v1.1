pipeline {
  agent any
  stages {
    stage('Cloning Project') {
      steps {
        sh '''cd /home/rinyato/portfolio-v1.1
git config --global --add safe.directory /home/rinyato/portfolio-v1.1
'''
        git(url: 'https://github.com/rin-yato/portfolio-v1.1.git', branch: 'main')
      }
    }

    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }

    stage('Start') {
      steps {
        sh '''cd /home/rinyato/portfolio-v1.1
pm2 start yarn --name portfolio1 -- start'''
      }
    }

  }
}