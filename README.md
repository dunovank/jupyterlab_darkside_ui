# jupyterlab_darkside_ui

![Github Actions Status](https://github.com/dunovank/jupyterlab_darkside_ui/workflows/Build/badge.svg)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/dunovank/jupyterlab_darkside_ui/HEAD?urlpath=lab)

Darkside ui and syntax theme for JupyterLab

## Preview
![](./jupyterlab_darkside_ui.png)

## Requirements

* JupyterLab >= 3.0

## Install
***NOTE:*** After installing and launching `jupyter lab`, the theme still needs to be enabled:
***Settings > JupyterLab Theme > @dunovank/jupyterlab_darkside_ui***

```bash
pip install jupyterlab_darkside_ui
```

## Uninstall

```bash
pip uninstall jupyterlab_darkside_ui
jupyter labextension uninstall @dunovank/jupyterlab_darkside_ui
```


## Develop

* You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

* The `jlpm` command is JupyterLab's pinned version of [yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use `yarn` or `npm` in lieu of `jlpm` below.

* With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

* By default, the `jlpm run build` command (see above) generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

### Build & Watch (Terminal 1)

```bash
# Clone the repo to your local environment
# cd to the jupyterlab_darkside_ui dir
# Install package in editable (-e) mode
pip install -e .

# Link your dev version of
# the extension with JupyterLab
jupyter labextension develop . --overwrite

# Rebuild extension Typescript
# source after making changes
jlpm run build

# Watch the source
# dir in Terminal 1
jlpm run watch
```

### Run JupyterLab (Terminal 2)

```bash
jupyter lab
```

## Publish

```bash
pip install jupyter_packaging twine
```

```bash
python setup.py sdist bdist_wheel && twine upload dist/*
```

```bash
jlpm build:lib && npm publish --access public
```

> TODO
- Bring more fancy ui like in https://github.com/timkpaine/jupyterlab_miami_nights:
