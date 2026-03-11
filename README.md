# Azure DevOps CI/CD Capstone Project

## Overview
This project demonstrates a basic multi-stage CI/CD pipeline using Azure DevOps for a Node.js web API application.

## Pipeline Flow
Code commit → CI pipeline runs → Build & test execution → Artifact creation → Automatic deployment to Dev → Manual approval before UAT deployment.

## Stages
- **CI** – Install dependencies, run tests, build application, publish artifact  
- **Deploy Dev** – Automatic deployment simulation  
- **Deploy UAT** – Deployment after manual approval  

## Key Concepts Demonstrated
- YAML based pipeline design  
- Multi-stage CI/CD implementation  
- Artifact publishing and reuse  
- Environment-based deployment flow  
- Basic DevOps governance and branching strategy  

## Branching Approach
The **main** branch represents stable code.  
Feature branches are used for development and merged through pull requests.
