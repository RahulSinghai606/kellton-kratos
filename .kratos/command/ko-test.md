---
description: Execute tests with coverage analysis and reporting
agent: quality-engineer
---
Execute tests for the specified component or entire project:

1. **Discover Tests** - Find all test files and test cases
2. **Run Tests** - Execute test suite with coverage tracking
3. **Analyze Results**:
   - Test pass/fail summary
   - Code coverage report (line, branch, function)
   - Uncovered code paths
   - Flaky test detection
4. **Visual Testing** (if applicable):
   - Use Playwright for E2E browser tests
   - Screenshot comparison
   - Accessibility (WCAG) compliance
5. **Report Generation** - Output structured test report

Options:
- `--coverage` - Generate coverage report
- `--e2e` - Run end-to-end tests
- `--unit` - Run unit tests only
- `--watch` - Watch mode for development
