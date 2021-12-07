pipeline { 
    agent { 
        docker { 
            image 'node:16-alpine' 
            args '-dp 3030:3030 --name jenkins-test'
            } }
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Initialize'){
            def dockerHome = tool 'docker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        stage('Test'){
            steps {
                sh 'whoami'
                sh 'npm install'
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