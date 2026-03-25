# 🚀 CI Pipeline for Node.js Application using Jenkins

## 📌 Project Overview

This project demonstrates a simple **Continuous Integration (CI) pipeline** using Jenkins for a Node.js application. The pipeline automates installing dependencies and running unit tests whenever code is pushed.

---

## 🛠️ Tech Stack

* Node.js
* Jenkins
* GitHub
* Jest (for testing)

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

```

---

## ⚙️ Features

* Automated dependency installation (`npm install`)
* Automated test execution (`npm test`)
* CI pipeline using Jenkins
* Real-time build status (Success/Failure)

---

## 🔄 CI Pipeline Workflow

1. Jenkins pulls code from GitHub repository
2. Installs dependencies
3. Runs unit tests
4. Displays build result (Success/Failure)

---

## 🧪 Test Cases

The project includes unit tests for password validation:

* Valid password
* Too short password
* Missing uppercase letter
* Missing number

---

## ▶️ How to Run Locally

### 1. Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Install dependencies

```
npm install
```

### 3. Run tests

```
npm test
```

---

## ⚙️ Jenkins Setup

1. Create a new Pipeline job in Jenkins
2. Connect your GitHub repository
3. Add `Jenkinsfile` in the repo
4. Run the build

---

## 📊 Build Result

* Successful execution of pipeline stages:

  * Install Dependencies ✅
  * Run Tests ✅
* Final Status: **SUCCESS**

---

## 🚧 Challenges Faced

* Fixed Jenkinsfile syntax errors
* Resolved Git branch issues (`master` vs `main`)
* Debugged pipeline execution errors

---

## 🎯 Conclusion

This project demonstrates how CI pipelines help automate testing and improve code reliability. It serves as a beginner-friendly introduction to DevOps practices using Jenkins.

---



---
