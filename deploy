cd ./front-end
npm run build
cp ./build/index.html ../back-end/templates
cp ./build/static ../back-end/

cd ../back-end/
pip --quiet install -r requirements.txt
python app.py