pipeline { 
    agent { 
        docker { image 'node:16-alpine' } 
        }
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Test'){
            steps {
                sh "echo 'First test running on docker container with jenkins'"
                sh 'whoami'
                sh 'sudo npm install'
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t crmejiam/rampup-frontend .'
                sh 'ls -l'
            }
        }
        // stage('Push') {
        //     steps {
        //         sh 'docker push crmejiam/rampup-frontend' //credentials
        //     }
        // }
        // stage('Clean') {
        //     steps {
        //         sh 'IMAGE_ID=$(sudo docker images --filter=reference=image_name --format "{{.ID}}")'
        //         sh 'docker image rm $IMAGE_ID'
        //     }
        // }
        // stage('Deploy') {
        //     steps {
        //         // call to ansible
        //     }
        // }
    }
}