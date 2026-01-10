---
description: Generate structured implementation workflows
---
Create a structured implementation workflow from the provided specification:

1. **Parse Specification** - Extract requirements from the input document
2. **Break Down Tasks**:
   - Phases (Design → Implement → Test → Deploy)
   - Epics and Stories
   - Individual tasks with estimates
3. **Identify Dependencies**:
   - Task ordering
   - Blocking relationships
   - Parallel opportunities
4. **Assign Agents**:
   - Match tasks to specialized agents
   - Define handoff points
5. **Create Timeline**:
   - Milestone definitions
   - Critical path analysis
6. **Output Workflow**:
   - Task list with descriptions
   - Dependency graph
   - Agent assignments

Store workflow in Graphiti for cross-session persistence.
