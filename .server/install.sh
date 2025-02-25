sudo apt update
sudo apt install -y nodejs npm apache2 snapd cron
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
cd ~
git clone https://github.com/eu-cdse/stac-browser-cdse/
sudo a2enmod rewrite
cp ./stac-browser-cdse/.server/browser.conf /etc/apache2/sites-available/000-default.conf
sudo certbot --apache -d browser.stac.dataspace.copernicus.eu
sudo service apache2 restart
sudo crontab -e
# in ctrontab, add the following lines (without the leading '# '):
# 0 3 * * * /usr/bin/certbot renew --apache -n
# 0 4 * * * /bin/systemctl restart apache2
