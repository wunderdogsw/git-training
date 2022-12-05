# git-training

## Commit often

It is good practice to commit often to avoid losing work due to e.g. accidentally discarding changes. It's also easier to separate renaming/refactoring work from logic changes if everything is in separate commits. However, this might lead to an incoherent story in the PR commit history. Here we will discuss a couple of methods on how to fix history before creating a PR.

## Amend commits

Sometimes you forgot to stage something before you commit or maybe you notice a small but in your previous commit. In these cases the easiest wayt to keep your history clean is just to add to the previous commit.

```
git add .
git commit --amend
```

Use the following to also fix the commit message:

```
git commit --amend -m "Fixed message"
```

## Cherry picking

Story: You fix something that needs to be fixed both on your local branch to enable further development but then you realise that the same fix needs to be enabled for other developers immediately, before your feature is ready. In the following example we will add some crucial documentation without which no one can continue.

1. `git checkout bikes-and-stuff`
1. `git log`
1. Copy the commit hash of the "Add documentation" commit
1. `git checkout main`
1. `git checkout -b documentation`
1. `git cherry-pick <commit-hash>`

## Interactive rebase

Story: After almost a full day of working, you notice that the feature set you were working on is not ready yet and the scope of your upcoming PR is gradually creeping. Instead of delivering the new 'bikes' feature with a bike editor and documentation all in the same PR, you decide to split the work into first implementing the bikes listing feature and documentation and then continuing with the bike editor later.

1. `git checkout bikes-and-stuff`
1. `git checkout -b bikes`
1. `git rebase --interactive` [bikes onto] `main`
1. Use your favourite editor to reworder the commits

```
pick 37ba009 Add bikes api
pick bfa0c88 Add bikes to the UI
pick 98f84b5 Add bike api
pick 654b5b2 Add status to bikes in ui
pick d9f356e Fix bike status displaying in the ui
pick 93207fc Add documentation
pick a0e4028 Fix: Add missing bike endpoint handler
pick 470aaee Fix handler types
```

nano help (Ctrl+K: Cut, Ctrl+U: Paste, Ctrl+O: Save, Ctrl+X: Exit)

```
pick 37ba009 Add bikes api
squash 470aaee Fix handler types
pick bfa0c88 Add bikes to the UI
drop 98f84b5 Add bike api
pick 654b5b2 Add status to bikes in ui
squash d9f356e Fix bike status displaying in the ui
drop 93207fc Add documentation
drop a0e4028 Fix: Add missing bike endpoint handler
```

5. Manually fix conflicts in editor (or use GUI).
6. `git add .`
7. `git rebase --continue`
