Boumezbeur Nour El Imene Groupe 1

# 4.3 What does Git tell you about the new folder and the moved files? 

This git status output shows:

Changes in your repository:

README.md - Modified but not staged for commit (you made changes to this file)

Lab1/ - A new folder that Git doesn't track yet

In short:

You have unsaved changes to README.md

You have a new Lab1 folder that Git isn't tracking

Nothing is ready to be committed yet

Next steps would be:

bash
git add .                    # Stage all changes (both README.md and Lab1/)
git commit -m "Your message" # Commit the changes
This is exactly what the exercise expects to see at this point! You're on the right track.



$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Lab1/

no changes added to commit (use "git add" and/or "git commit -a")
