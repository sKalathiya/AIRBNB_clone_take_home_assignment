---
name: implement
description: >-
  Implements one named section of the pixel-perfect clone from the given
  reference file in references/. Uses only values that file provides, plus
  asset and listing data in src/assets that the file needs. Use when the
  user runs /implement, or asks to implement a section from a references file.
disable-model-invocation: true
---

# Implement

This skill uses the given reference file from `references/` and implements that specific section of the pixel-perfect clone. It does not assume or use any other values except for what the reference file provides. It starts by reading the rules, then that reference file, then `src/assets` for any asset information needed. Ask clarifying questions if needed.

## Workflow

```
Task Progress:
- [ ] Step 1: Read the rules
- [ ] Step 2: Read the given reference file
- [ ] Step 3: Read src/assets
- [ ] Step 4: Ask clarifying questions if needed
- [ ] Step 5: Implement that section only
- [ ] Step 6: Log the prompt
```

**Step 1: Read the rules**

Read `.cursor/rules/requirements.mdc` and `.cursor/rules/project.mdc` before any other project file. Stay on desktop. Do not open the reference website. Do not read other files in `references/`.

**Step 2: Read the given reference file**

Read only the reference file the user named or attached, such as `references/header.md` or `references/mosaic.md`. That file is the only source for layout, spacing, typography, color, assets to use, motion, interaction, and accessibility.

If the user did not name a file, ask which file in `references/` to use. Do not pick one.

**Step 3: Read src/assets**

Read `src/assets/asset.ts` and `src/assets/data.ts`. Use them only when the reference file needs an image, font, icon, or listing value stored there. If the file names an asset or data field that is not in those files, ask. Do not add a URL, string, or record that the reference file did not already provide.

**Step 4: Ask clarifying questions if needed**

Stop before writing code when any of these are true:

- A size, color, font, spacing, copy string, asset, or behavior the section needs is missing from the reference file.
- The value is under Non-verified / Assumed.
- The reference file and `src/assets` disagree.
- Building the section would require a value from another reference file, the live site, or a default.

Ask the user. Wait for the answer. Do not fill the gap.

**Step 5: Implement that section only**

Implement only the section in the given reference file. Match the values in that file. Write original code. Do not copy markup or code from the reference site. Do not change files outside that section.

Use Observed values only. Do not import a measurement, color, animation, or string from any other reference file.

**Step 6: Log the prompt**

Append the user prompt to `.cursor/logs/prompt-log.mdc`, separated by `---`, as the project rules require.

## Example

User: `/implement references/mosaic.md`

Read the two rule files, then `references/mosaic.md`, then `src/assets/asset.ts` and `src/assets/data.ts`. If a mosaic value is missing or marked Non-verified / Assumed, ask before coding. Otherwise implement the mosaic section from that file alone.
