**Git Bash info**
$ git --version 	(check if you have git and what version you have)
$ git clone             https://github.com/kitkat0202/test-git.git	
                        (copy what was in github on to local drive)

$ git status		(shows what is different from current folder to folder in git hub)
$ git init		(Create an empty Git repository or reinitialize an existing one)
$ git add .             (git add -A)	(add all)
$ git add index.html	(add only index.html)
$ git rm index.html     (remove a file)
$ git mv index.html folderName (movr file)

$ git commit -m "Required note to adding" 
                        (lock in all the adds and add the note to the change)
                        (if you forget to add a msg  esc + : + “wq”)
$ git push		(push it up to github.com)
$ git pull		(take in all changes from hithub.com)



$ git branch branchname                 (create branch)
$ git checkout branchname               (go to branch)

$ git checkout -b branchname            (create and go to branch)
$ git push origin branchname            (push to branch)




**Naming Conventions**
$ git -b checkout f-qadev-12345-combobox
f               - featured branch
qadev           - team creating the branch
12345           - # branch
combobox        - what the branch is working on




**Merge is merge down**
$ git merge origin/upperbranchname                  (merge from upperbranchname with what you have) --dont do




**Fetch get all of the updates and differences -- but does not merge it**
$ git fetch

Fork – Create a copy of the code and puts it in your account
Branch – Creates a copy to work on and can be merged in to the main code later on




**Create a new repository on the command line**
        git init
        git add README.md
        git commit -m "first commit"
        git remote add origin https://github.com/kitkat0202/newTest.git
                (Manage set of tracked repositories)
        git push -u origin master

**Push an existing repository from the command line**
        git remote add origin https://github.com/kitkat0202/newTest.git
        git push -u origin master







