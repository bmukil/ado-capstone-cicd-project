# \# Azure DevOps CI/CD Capstone Project

# 

# \## Project Overview

# This project demonstrates a basic multi-stage CI/CD pipeline design using Azure DevOps YAML pipelines for a Node.js based web API.

# 

# \## Pipeline Flow

# Developer commits code → CI pipeline triggers → Application is built and tested → Artifact is generated → Deployment simulated to DEV environment → Manual approval required before UAT deployment.

# 

# \## Stages Implemented

# 

# \### CI Stage

# \- Install Node.js dependencies

# \- Execute test script

# \- Build application

# \- Publish pipeline artifact

# 

# \### Deploy Dev Stage

# \- Simulated automatic deployment after successful CI

# 

# \### Deploy UAT Stage

# \- Simulated deployment representing controlled release with approval gate

# 

# \## Governance Model

# \- Main branch considered protected

# \- Feature branches intended for development

# \- Pull request validation concept applied

# 

# \## Outcome

# This project showcases understanding of:

# \- YAML based pipeline design

# \- Multi-stage CI/CD workflow

# \- Artifact management

# \- Environment promotion strategy

# \- DevOps governance practices

