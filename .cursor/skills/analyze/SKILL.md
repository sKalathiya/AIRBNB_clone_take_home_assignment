---
name: analyze
description: >-
  Delegates one requested subsection of the reference site in
  .cursor/rules/requirements.mdc to the reference-analyzer subagent and
  returns that subagent's detailed visual and behavior report to the parent
  agent. Use when the user runs /analyze or /anaylze, or asks to analyze a
  subsection of the reference site, listing page, photo tour, or lightbox.
disable-model-invocation: true
---

# Analyze

this skill will ask the @.cursor/agents/reference-analyzer.mdc subagent to analyze only a asked subsection of the reference provided in the @.cursor/rules/requirements.mdc and will give a detail report to the parent agent.

## Workflow

```
Task Progress:
- [ ] Step 1: Read the @requirements.mdc, @project.mdc and name the subsection
- [ ] Step 2: Ask reference-analyzer for that subsection only
- [ ] Step 3: Relay the subagent report to the user
```

**Step 1: Read the requirements and name the subsection**

Read `.cursor/rules/requirements.mdc` and `.cursor/rules/project.mdc`. Use its Reference Target URL. Stay on desktop. Ignore mobile layouts.

Use only the subsection the user named. A subsection is one view or one named part in that file, such as the listing navigation bar, the photo mosaic, the sticky price widget, the Photo Tour, or the Lightbox.

If the user did not name a subsection, ask which one before launching. Do not analyze the whole reference.

**Step 2: Ask reference-analyzer for that subsection only**

Launch the Task tool with `subagent_type` `reference-analyzer`. The subagent does not see this chat, so put the full task in `prompt`. Leave `model` unset so the subagent file's model is used. If that launch fails because the model slug is invalid, retry once with `claude-opus-5-5-medium`.

Use this prompt, filling the angle-bracket fields from the user request and from `.cursor/rules/requirements.mdc`:

```text
Analyze only this subsection of the reference website: <subsection>.

Reference URL: <Reference Target from .cursor/rules/requirements.mdc>
Viewport: desktop only. Ignore mobile layouts.

Follow .cursor/agents/reference-analyzer.mdc. Open the reference and inspect only the requested subsection.

Return a detailed report to the parent agent with:
- Visual details: spacing, layouts, typography, fonts, icons, colors, assets
- Behavioral details: hover, focus, clickable animations, keyboard navigation, accessibility

When analyzing the reference site, extract every image or font URL beginning with `https://airbnb-clone-umber-two.vercel.app/` and store those URLs in the `@assets/asset.ts` file. Do not include these links directly in your analysis output — always reference the logical name as provided in `asset.ts`. If a new asset is detected, append it to the list in `asset.ts` with a clear, unique, and concise identifier. All component or report references to images or fonts must resolve through a corresponding asset object import from `asset.ts`.

If any listing data or related structured data is found during analysis of the reference site, store it in `@assets/data.ts`.

Do not modify or write data/asset records in any files outside the `@assets` folder. Do not read any project files except for the `@assets` folder and `@.cursor` folder. Do not modify or implement any code in any other file except for files in `@assets` folder.

Classify every item as:
1. Observed: directly and clearly present on the site
2. Non-verified/Assumed: inferred, unclear, or not directly verified

Do not modify any files. Do not copy source code or markup from the reference site. Report observations only.
```

If the user names more than one subsection, launch one `reference-analyzer` task per subsection in the same message.

**Step 3: Relay the subagent report to the user**

Give the parent agent's user the subagent report. Keep its Observed and Non-verified/Assumed split. Do not add sections the subagent did not report. Do not implement UI from the report unless the user also asked to build it. If no report was available or the subagent was not able to complete the examination, return those details and do not let parent agent complete that task for the subagent.

## Example

User: `/analyze Photo Tour Component`

The parent reads the Reference Target from `.cursor/rules/requirements.mdc`, launches `reference-analyzer` for the Photo Tour only, and returns that report.
