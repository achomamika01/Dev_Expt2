pipeline {
    agent any   // Jenkins will run on any available agent

    stages {
        stage('Checkout') {
            steps {
                // Pull latest code from GitHub repository
                git branch: 'main', url: 'https://github.com/your-repo/project.git'
            }
        }

        stage('Build') {
            steps {
                // Compile and package the application using Maven
                bat 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                // Run unit tests
                bat 'mvn test'
            }
            post {
                always {
                    // Archive test results and reports
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Example deployment step (can be Docker, SSH, or cloud)
                echo 'Deploying application to staging server...'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment successful!'
        }
        failure {
            echo '❌ Build failed. Check logs for details.'
        }
    }
}
