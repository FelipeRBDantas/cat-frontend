pipeline {
    agent any

    stages {
        stage('Clonar projeto') {
            steps {
                git branch: 'main', url: 'https://github.com/FelipeRBDantas/cat-frontend.git'
            }
        }
        stage('Instalar dependências') {
            steps {
                powershell 'npm install'
            }
        }
        stage('Iniciar aplicação') {
            steps {
                powershell 'npm start'
            }
        }
    }
}
