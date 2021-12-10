pipeline { 
    agent any
    tools {nodejs "nodejs"}
    options {
        skipStagesAfterUnstable()
    }
    environment{
        registryCredential = 'd08b1f0a-4cd6-4f33-b7f5-a9414a07f3ef'
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
        stage('Build') {
            steps {
                script {
                    def frontImage = docker.build("crmejiam/rampup-frontend")
                }
                sh 'ls -l'
            }
        }
        stage('Push') {
            steps {
                script{
                    frontImage.push()
                }
            }
        }
        stage('Clean') {
            steps {
                sh 'IMAGE_ID=$(sudo docker images --filter=reference=image_name --format "{{.ID}}")'
                sh 'docker image rm $IMAGE_ID'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         // call to ansible
        //     }
        // }
    }
}