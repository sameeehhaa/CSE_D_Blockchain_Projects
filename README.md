# CSE D - Blockchain Projects Repository

This repository is for students to submit their blockchain projects. Each student should create a folder for their project and add their project files there.

## How to submit your project

1. Choose a clear folder name for your submission, for example:
   - RollNumber_ProjectName

2. Put all your project files inside that folder.

3. Use Git to add and push your submission via a fork. Example steps below.

## Git steps (example)

Replace <your-fork-url> with the HTTPS or SSH URL of your fork, and <original-repo-url> with the original repository URL.

0. Fork the repository on GitHub (click "Fork" on the repo page). You will submit from your fork and open a Pull Request to the original repo.

1. Clone your fork
```bash
git clone <your-fork-url>
cd CSE_D_Blockchain_Projects
```

IMPORTANT: After cloning, do NOT delete or remove other students' folders even if they submitted earlier. Leave existing submission folders in place.

2. Add the original repository as an upstream remote and sync main (required before adding your project)
```bash
git remote add upstream <original-repo-url>
git fetch upstream
git checkout main
git pull upstream main
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
# IMPORTANT: do NOT add virtual environment folders (e.g. venv/) or dependency folders (e.g. node_modules/) to the repo.
# Add a .gitignore file to your project folder listing venv/ and node_modules/ before committing.
```

5. Stage and commit your changes
```bash
git add RollNumber-ProjectName
git status            # review what will be committed
git commit -m "Add project: RollNumber - ProjectName"
```

6. Push your branch to your fork and open a Pull Request to the original repo
```bash
git push -u origin rollnumber-projectname
# then open a PR on GitHub from your fork/rollnumber-projectname -> original-repo:main
```

Do NOT push directly to the original repository's main. Always submit via a branch on your fork and open an individual PR so submissions can be reviewed and merged safely.

## Important disclaimer and safety tips

- Do NOT delete or move other folders. If another student submitted before you, keep their folder intact — create your own folder alongside it.
- Avoid running broad remove commands such as `git rm -r *` or deleting top-level folders.
- Always run `git status` and `git diff` (or review staged files) before committing to ensure you're only adding or changing your files.
- Pull the latest changes from upstream (`git fetch upstream` and `git pull upstream main`) before creating your branch and before pushing to reduce the risk of conflicts.
- Use a branch on your fork and open a PR to merge into the original repo's main—this protects others' work and makes review easier.
- Do NOT commit virtual environment folders (e.g. `venv/`) or dependency folders (e.g. `node_modules/`). Add them to a `.gitignore` file in your project folder.
- If you are unsure about any command, ask the faculty or the repository maintainer before running destructive git commands.
