pipeline { 
    agent any
    tools {nodejs "nodejs"}
    options {
        skipStagesAfterUnstable()
    }
    environment{
        dockerCredentials = 'd08b1f0a-4cd6-4f33-b7f5-a9414a07f3ef'
    }
    stages {
        stage('Test'){
            steps {
                sh "echo 'First test running on docker container with jenkins'"
                sh 'whoami'
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Build & Push') {
            steps {
                script {
                    def frontImage = docker.build("crmejiam/rampup-frontend")
                    docker.withRegistry('', dockerCredentials) {
                        frontImage.push()
                    }
                }
                sh 'ls -l'
            }
        }
        stage('Clean') {
            steps {
                sh 'docker rmi crmejiam/rampup-frontend'        // There's no plugin method to remove docker images
            }
        }
        // stage('Deploy') {
        //     steps {
        //         // call to ansible
        //     }
        // }
    }
} 