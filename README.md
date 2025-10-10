# CSE D - Blockchain Projects Repository

This repository is for students to submit their blockchain projects. Each student should create a folder for their project and add their project files there.

## How to submit your project

1. Choose a clear folder name for your submission, for example:
   - RollNumber_ProjectName

2. Put all your project files inside that folder.

3. Use Git to add and push your submission. Example steps below.

## Git steps (example)

Replace <repo-url> with the repository HTTPS or SSH URL and replace branch/main as appropriate.

1. Clone the repository
```bash
git clone <repo-url>
cd CSE_D_Blockchain_Projects
```

IMPORTANT: After cloning, do NOT delete or remove other students' folders even if they submitted earlier. Leave existing submission folders in place.

2. Update your local main with the latest changes (required before adding your project)
```bash
git fetch origin
git checkout main
git pull origin main
```

Add your project only after completing the steps above. This ensures you do not accidentally overwrite or remove another student's submission.

3. Create a new branch for your submission (required)
```bash
git checkout -b rollnumber-projectname
```

4. Create your folder and add files
```bash
mkdir RollNumber-ProjectName
# copy or create your project files into the folder
```

5. Stage and commit your changes
```bash
git add RollNumber-ProjectName
git status            # review what will be committed
git commit -m "Add project: YourName - ProjectName"
```

6. Push your branch and open a Pull Request
```bash
git push -u origin rollnumber-projectname
# then open a PR on GitHub to request merging into main
```

Do NOT push directly to main. Always submit via a branch and open a PR so submissions can be reviewed and merged safely.

## Important disclaimer and safety tips

- Do NOT delete or move other folders. If another student submitted before you, keep their folder intact — create your own folder alongside it.
- Avoid running broad remove commands such as `git rm -r *` or deleting top-level folders.
- Always run `git status` and `git diff` (or review staged files) before committing to ensure you're only adding or changing your files.
- Pull the latest changes (`git fetch` and `git pull origin main`) before creating your branch and before pushing to reduce the risk of conflicts.
- Use a branch for your work and open a PR to merge into main—this protects others' work and makes review easier.
- If you are unsure about any command, ask the faculty or the repository maintainer before running destructive git commands.
