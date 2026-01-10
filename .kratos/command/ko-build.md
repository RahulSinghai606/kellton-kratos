---
description: Build and package projects with error handling
agent: devops-architect
---
Build and package the project for deployment:

## Build Modes

### `--development`
- Fast builds with source maps
- Hot reload friendly
- Debug symbols included

### `--production`
- Optimized and minified
- Tree shaking enabled
- Bundle analysis

### `--staging`
- Production-like with debug info
- Environment variable validation

## Process

1. **Pre-build Checks**:
   - Dependency audit
   - Type checking
   - Lint validation

2. **Build**:
   - Compile source code
   - Bundle assets
   - Generate artifacts

3. **Post-build**:
   - Run build tests
   - Generate manifests
   - Create deployment package

4. **Error Handling**:
   - Parse build errors
   - Suggest fixes
   - Auto-retry with corrections

Output build artifacts and deployment-ready packages.
