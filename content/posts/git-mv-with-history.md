--- 
draft: false
date: 2022-01-27
title: Preserving History When Moving Files in Git
description: A retrospective of how I moved files between Git repos while preserving history
slug: git-mv-with-history
authors:
  - Robert Tucker
tags:
  - git
  - how-to
categories:
  - Development
---

## The What

I recently decided that I needed to move a directory from one Git repository to another where it would be a better, long-term fit. I'd never had any luck with this before (in the same repository, no less) so, like any intrepid developer, I took to [Google](https://www.google.com/search?q=git+mv+preserve+history) to see if it was even possible. As it turns out, this has been an issue for many people over many years and there are a myriad of opinions on how to accomplish it.

Having read through more [Stack Overflow](https://stackoverflow.com) threads than I'd like to admit, I decided that I'd write about what I did because:

1. It worked(**!**) and
2. It will be here to remind me the next time I need it.

## The How

I followed a promising-looking reference to a [blog post](http://blog.neutrino.es/2012/git-copy-a-file-or-directory-from-another-repository-preserving-history) by Carlos Alberto Lopez Perez from all the way back in 2012. I've posted an adapted version of his process in the gist included below.

I also saw several examples that talked about using a `git filter-repo` command. If you're like me and didn't know that it isn't a native git command until entering it on the command line, surprise! It turns out that this is a plugin script. See the [installation page](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) in the project repository for information on how to get it for your platform.

## TL;DR

OK, enough preamble. Here's the process I followed:

{{< gist robertwtucker 629a20a0664ad6ce87adbe2cc81e5dd6 >}}

## The Bottom Line

While I won't pretend to know if this truly represents the _real_ history of the files, I like this solution in that I don't have to use `git log --follow` to see the history. Plus, I'm lazy and would rather use [GitHub](https://github.com)'s UI to display the history (which would not be possible without editing the commits).
