# Robert Tucker's Personal Website

[![Build Status](https://travis-ci.org/robertwtucker/robertwtucker.github.io.svg?branch=master)](https://travis-ci.org/robertwtucker/robertwtucker.github.io)

## Overview

This is the source repository for Robert Tucker's personal website at <https://robertwtucker.com>. It is:

- Coded with [Atom](https://atom.io) in vim-mode on a Mac
- Built using [Jekyll](https://jekyllrb.com)
- Hosted on [GitHub Pages](https://pages.github.com)

A [Docker Compose](https://docs.docker.com/compose/overview/) configuration file is included to assist with local development and testing. With Docker [installed](https://docs.docker.com/engine/getstarted/step_one/), after cloning the repository locally, use the following command in the root of the repository directory to get started:

```
> docker-compose up -d
```

The local source files are compiled and made available at <http://localhost:4000>. The container is configured to render incremental changes immediately by default.

## Development

There are two long-running branches:

- `master` for the hosted site (GitHub Pages)
- `staging` for integration testing prior to publishing to `master` (releasing to production).

Minor changes are generally applied directly to staging. Larger, more complex changes are undertaken in a feature-branch before being merged with `staging` for build verification.

## License

Open-source under the [MIT License](LICENSE.md)

## Contact

Have a question or comment? Feel free to [open an issue](https://github.com/robertwtucker/ama/issues/new) or [ask me on Twitter](https://twitter.com/robertwtucker).
