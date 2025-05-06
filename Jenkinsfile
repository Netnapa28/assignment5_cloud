pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // ชื่อต้องตรงกับที่ตั้งไว้ใน Jenkins config
    }

    environment {
        FIREBASE_TOKEN = credentials('1//0g_TH6S9WAOgxCgYIARAAGBASNwF-L9IrFhmuNZxDSZivyZBydsCVyB4phEs8UQyP0m1luy7kh1QfZjV6MUvVegyKCSox-e_-aoA')  // ใส่ Firebase token จาก Jenkins Credentials
    }

    stages {
        stage('Clone') {
            steps {
                echo "Cloning repo..."
                checkout scm
            }
        }

        stage('Install') {
            steps {
                dir('frontend') {
                    echo "Installing dependencies..."
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('frontend') {
                    echo "Building React project..."
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                dir('frontend') {
                    echo "Running tests..."
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
    steps {
        dir('frontend') {
            echo "Deploying to Firebase Hosting..."
            sh 'npm install -g firebase-tools' // ติดตั้ง firebase-tools ใน Jenkins agent
            sh "firebase deploy --only hosting --token ${FIREBASE_TOKEN}"
        }
    }
}

    }
}