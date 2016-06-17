#!/bin/bash

# Run ESLint on the script files in this commit.
# On lint errors, notify user and require confirmation before committing.

# Link stdin to terminal so we can get input from user.
exec < /dev/tty

# Path to ESLint executable script.
eslint_path=./node_modules/eslint/bin/eslint.js

# Names of the script files added/copied/modified in this commit.
files=$(git diff --cached --name-only --diff-filter=ACM app/scripts/)


echo "Linting scripts..."

if [[ $files = "" ]] ; then
    echo "Linting scripts successful. No script files found."
    exit 0

elif $eslint_path $files ; then
    echo "Linting scripts successful. No lint errors found."
    exit 0

else
    echo "There were lint errors with your commit 😟 ";

    read -r -p "Would you like to (a)bort or (c)ommit anyway? [A/c]" response
    echo

    if [[ $response =~ ^(commit|[cC])$ ]]; then
        echo "You are a bad person."
        sleep 1
        exit 0
    else
        echo "Aborting"
        exit 1
    fi
fi
