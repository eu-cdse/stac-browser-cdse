sudo apt update
sudo apt install -y nodejs npm apache2 snapd cron

# Update nodejs to latest lts as the default version in ubuntu is too old
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
source ~/.bashrc
nvm install --lts

# Get STAC Browser
cd ~
git clone https://github.com/eu-cdse/stac-browser-cdse/

# Configure Apache and SSL
sudo a2enmod rewrite
cp ./stac-browser-cdse/.server/browser.conf /etc/apache2/sites-available/000-default.conf
sudo apache2ctl configtest
sudo service apache2 restart

# Build STAC Browser etc.
cd ./stac-browser-cdse/.server/
bash update.sh
