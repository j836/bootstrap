# bootstrap
Use git push --set-upstream origin Assignment2<branchname> to push a branch to github
  In package .json "scss":"node-sass -o css/ css/" is added while after installing sass compiler by writing the command  npm install --save-dev node-sass
  --save-dev means its a developer dependancy.
  node-sass -o css/ css/ means that the output file that is the converted .css files (-o css/) lies in css folder and the source file also lies in the css folder.
  All the scss file will be taken by node-sass node module and it will convert it to css files
  Everytime a scss file is updated we need to compile it by running the command npm run scss
  Thus we have amodule names onchange.This module watches for a change in the files in our project folder and if they are change sit will automatically complete the desired task.
  So for eg we have scss file and it has just been updated ..So it will AUTOMATICALLY Recomplie it.
  We already have such script in our project folder.We just need to add WATCH over files.
  There is another module which is used for same purpose.
  Parallel shell is another node module which allows to run multiple shells simultaneously and thus the name PAraallel shell.
  Thus multiple npm scripts could be run
  Command : npm install --save-dev onchange parallelshell
  "watch:scss":"onchange \"css/*.scss\" -- npm run scss" means keep a eatch on all scss files in css folder If any of them then trigger the following script
  npm run scss
  Yes this one..Because this npm script is going to run the scss code.
 "watch-all":"parallelshell \"npm run watch:scss\" \"npm run lite\" "
  Allows Running 2 scripts simultaneously
  Now after doing npm start will start the 2 scripts simultaneously.
