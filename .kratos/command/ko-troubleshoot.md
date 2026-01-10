---
description: Diagnose and resolve build/deployment/runtime issues
agent: root-cause-analyst
---
Systematically troubleshoot the reported issue:

1. **Problem Definition**:
   - Collect error messages and logs
   - Identify symptoms vs root causes
   - Establish timeline of events

2. **Investigation**:
   - Analyze stack traces
   - Check configuration files
   - Review recent changes (git diff)
   - Examine environment differences

3. **Hypothesis Testing**:
   - Form hypotheses about root cause
   - Design tests to verify/falsify each
   - Use binary search for regressions

4. **Resolution**:
   - Implement fix
   - Verify fix resolves issue
   - Prevent recurrence

5. **Documentation**:
   - Root cause summary
   - Fix applied
   - Prevention measures

Use Sequential MCP for systematic step-by-step analysis.
