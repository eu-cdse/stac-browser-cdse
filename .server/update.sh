cd ~/stac-browser-cdse
# Update the Browser
git pull
npm install
# Build the Browser
npm run build
# Copy the built files to the Apache web server directory
sudo rm -r /var/www/html/**
sudo cp dist/* /var/www/html -r
sudo chown -R "$USER":www-data /var/www/html
sudo chmod -R 0755 /var/www/html