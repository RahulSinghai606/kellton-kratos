---
description: Comprehensive code analysis (quality, security, performance)
agent: security-engineer
---
Perform comprehensive code analysis on the specified files or directories:

## Analysis Categories

### Security Analysis
- OWASP Top 10 vulnerabilities
- SQL injection, XSS, authentication flaws
- Data flow analysis (taint tracking)
- Input validation issues

### Quality Analysis
- Code complexity metrics (cyclomatic complexity)
- Dead code detection
- Dependency analysis and circular dependencies
- Code duplication

### Performance Analysis
- Bottleneck identification
- Memory leak potential
- N+1 query detection
- Async/await anti-patterns

Use TheAuditor for database-first analysis when available. Output actionable findings with severity ratings and remediation guidance.
