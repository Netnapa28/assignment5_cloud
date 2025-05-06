// pipeline {
//     agent any

//     environment {
//         FIREBASE_PROJECT_ID = 'assignment-5-gift' // Firebase Project ID ที่คุณสร้างไว้
//         FIREBASE_CREDENTIALS = credentials('firebase-service-account') // Firebase Service Account Key ที่ตั้งไว้ใน Jenkins
//     }

//     stages {
//         stage('Install Dependencies') {
//             steps {
//                 script {
//                     // ติดตั้ง dependencies สำหรับโปรเจกต์ React
//                     sh 'npm install'
//                 }
//             }
//         }

//         stage('Build Project') {
//             steps {
//                 script {
//                     // สั่ง build โปรเจกต์ React
//                     sh 'npm run build'
//                 }
//             }
//         }

//         stage('Deploy to Firebase Hosting') {
//             steps {
//                 script {
//                     // ติดตั้ง Firebase CLI
//                     sh 'npm install -g firebase-tools'

//                     // Login to Firebase โดยใช้ Firebase service account key
//                     withCredentials([file(credentialsId: 'firebase-service-account', variable: 'FIREBASE_KEY')]) {
//                         sh 'firebase login --token $(cat $FIREBASE_KEY)'
//                     }

//                     // Deploy ไปยัง Firebase Hosting
//                     sh 'firebase deploy --project $FIREBASE_PROJECT_ID'
//                 }
//             }
//         }
//     }

//     post {
//         success {
//             echo 'Deployment to Firebase Hosting completed successfully!'
//         }
//         failure {
//             echo 'Deployment failed. Check the logs for more details.'
//         }
//     }
// }

pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // ชื่อต้องตรงกับที่ตั้งไว้ใน Jenkins config
    }

    environment {
        FIREBASE_TOKEN = credentials('1//0gqvf49Z5IXRRCgYIARAAGBASNwF-L9IrwhSzCNsjF9iE__u4nupvOg297B1iKuazXwNa5nMsh6DkPDtJGGrVw1b6_sBas-Hs2bk')  // ใส่ Firebase token จาก Jenkins Credentials
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