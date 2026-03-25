# 🚀 CI Pipeline for Node.js Application using Jenkins (with Webhook)

## 📌 Project Overview

This project demonstrates a **Continuous Integration (CI) pipeline** using Jenkins for a Node.js application. The pipeline is automatically triggered using a GitHub webhook whenever code is pushed.

---

## 🛠️ Tech Stack

* Node.js
* Jenkins
* GitHub
* Jest

---

## 📁 Project Structure

```
ci-node-app/
│
├── src/
│   └── password.js
│
├── tests/
│   └── password.test.js
│
├── Jenkinsfile
├── package.json
├── .gitignore
```

---

## ⚙️ Features

* Automated dependency installation (`npm install`)
* Automated test execution (`npm test`)
* CI pipeline using Jenkins
* GitHub webhook integration (auto trigger)
* Real-time build status (Success/Failure)

---

## 🔄 CI Pipeline Workflow

1. Developer pushes code to GitHub
2. GitHub webhook triggers Jenkins
3. Jenkins pulls latest code
4. Installs dependencies
5. Runs tests
6. Displays build result

---

## 🔗 Webhook Integration

* Configured GitHub webhook to trigger Jenkins automatically
* Used endpoint:

```
http://<jenkins-ip>:8080/github-webhook/
```

---

## 🧪 Test Cases

* Valid password
* Too short
* Missing uppercase
* Missing number

---

## ▶️ How to Run Locally

### Clone repository

```
git clone https://github.com/your-username/your-repo-name.git
```

### Install dependencies

```
npm install
```

### Run tests

```
npm test
```

---

## ⚙️ Jenkins Setup

1. Create a Pipeline job in Jenkins
2. Connect GitHub repository
3. Enable webhook trigger
4. Add Jenkinsfile
5. Run build

---

## 📊 Build Result

* Install stage ✅
* Test stage ✅
* Final Status: SUCCESS

---

## 🚧 Challenges Faced

* Fixed Jenkinsfile syntax errors
* Resolved Git branch issues
* Configured webhook integration
* Debugged pipeline failures

---

## 🎯 Conclusion

This project demonstrates real-world CI automation using Jenkins with webhook integration, improving development workflow and efficiency.

---

---
