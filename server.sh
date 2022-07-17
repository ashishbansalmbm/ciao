pkill -9 node
pkill -9 sls
cd backend
gnome-terminal  --tab working-directory=`pwd` --command "yarn start" --title="backend"
cd ../
cd frontend
gnome-terminal  --tab working-directory=`pwd` --command "yarn start" --title="frontend"
