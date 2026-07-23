pipeline {

    agent any

    tools {
        nodejs 'Node20'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

    }

    post {

        success {
            echo '✅ CI Build Successful'
        }

        failure {
            echo '❌ CI Build Failed'
        }

        always {
            cleanWs()
        }
    }
}