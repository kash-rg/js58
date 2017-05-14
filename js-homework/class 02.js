// assignment 2
//in feedback, would love to learn how this is done in industry. 
//Typically on the job, do you save this file down as a .bash?
// or a .js/.sh and call it in terminal somehow? 

!/bin/bash    // <-- stackoverflow said to add "#!/bin/bash" but it looked commented out when I did that


cd ~/
pwd
mkdir -p js58/Sites/my-awesome-directory/nested-directory
cd js58
cd Sites
cd my-awesome-directory
cd nested-directory
touch hello.txt
cd ..
cd ..
touch terminals-are-fun.txt

cd ~/
cd js58
cd Sites
mkdir -p 1/2/3/4/5/6/7/8/9/hello/its/me
cd 1/2/3/4/5/6/7/8/9/hello/its/me
touch adele.jpg

cd ~/
cd js58/Sites
mkdir -p i/was/wondering/if/after/all/these/years/you world/like/to/meet
touch meet.jpg


chmod +x ~/Desktop/rsync.bash