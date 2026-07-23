pipeline {

    agent any

    tools {
        nodejs 'Node24'
    }

    environment {
        APP_PORT = "3000"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/ramanshakyars/employee-mgnt-next.js.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Stop Existing Server') {
            steps {
                bat '''
                taskkill /F /IM node.exe || exit 0
                '''
            }
        }

        stage('Start NextJS') {
            steps {
                bat '''
                start cmd /c "npm run start"
                '''
            }
        }

    }

    post {

        success {
            echo "Build Successful"
        }

        failure {
            echo "Build Failed"
        }

    }

}