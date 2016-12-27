# This makefile is meant to be run on OSX/Linux.  Make sure any artifacts
# created here are checked in so people on all platforms can run npm scripts.
# This build should be run once per release.

SHELL=/bin/bash
export PATH := ./node_modules/.bin/:$(PATH):./bin/

all: build

build:
	git diff-files --quiet # fail if unstanged changes
	git diff-index --quiet HEAD # fail if uncommited changes
	npm run docs
	npm run deploy