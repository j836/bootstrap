# bootstrap
Use git push --set-upstream origin Assignment2<branchname> to push a branch to github
  In package .json "scss":"node-sass -o css/ css/" is added while after installing sass compiler by writing the command  npm install --save-dev node-sass
  --save-dev means its a developer dependancy.
  node-sass -o css/ css/ means that the output file that is the converted .css files (-o css/) lies in css folder and the source file also lies in the css folder.
  All the scss file will be taken by node-sass node module and it will convert it to css files
  Everytime a scss file is updated we need to compile it by running the command npm run scss
  Thus we have amodule names onchange.This module watches for a change in the files in our project folder and if they are change sit will automatically complete the desired task.
  So for eg we have scss file and it has just been updated ..So it will AUTOMATICALLY Recomplie it.
  
