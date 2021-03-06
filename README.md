# FE boilerplate using Webpack and yarn

## Usage  
**Make sure you have node version >=4 && <=9**
Install **yarn:** [Installation instructions](https://yarnpkg.com/en/docs/install)  
Install webpack cli globally on your machine ```yarn global add webpack webpack-cli``` (on Linux, may require ```sudo```)

## Development setup:
* Clone the repository ```git clone <repo url>```
* Navigate to project directory and run ```yarn install``` to install required modules

### Assets folders:
*Put assets here:*
* Fonts: *build/assets/fonts/*
* Images: *build/assets/images/*

### Compilation paths:
* CSS (master.css) is compiled to: *build/css/*
* Javascript (master.js) is compiled to: *build/js/*

### Commands:
* ```yarn run dev``` - Runs webpack-dev-server for development mode
* ```yarn run build``` - Compile code once, and exit
* ```yarn run prod``` - Compile code for production, includes css and javascript master file minification

### Command simplification:
If working on Linux or Mac, in order to simplify the commands, you can add an alias to your shell configuration file (.bashrc, .zshrc, etc). Navigate to home folder in the terminal, type ```nano .bashrc``` (or .zshrc).

At the end of the file, add ```alias dev='yarn run dev'```. Restart the terminal, and now you can type only ```dev``` in the project folder, to start the webpack dev server. If needed, create aliases for build and production commands as well.

**Note: Make sure you don't name your alias the same as some other system command, and that it does not conflict with other alias names.**
