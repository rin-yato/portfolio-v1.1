pipeline {
  agent any
  stages {
    stage('Cloning Project') {
      steps {
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
        sh 'yarn start'
      }
    }

  }
}