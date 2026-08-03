sudo apt update
sudo apt install -y nodejs npm apache2 snapd cron
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
cd ~
git clone https://github.com/eu-cdse/stac-browser-cdse/
sudo a2enmod rewrite
cp ./stac-browser-cdse/.server/browser.conf /etc/apache2/sites-available/000-default.conf
sudo certbot --apache -d browser.stac.dataspace.copernicus.eu
# Also issue RSA certificate in addition to the default ECDSA certificate for older corporate firewalls etc.
sudo certbot certonly --webroot -w /var/www/html -d browser.stac.dataspace.copernicus.eu --key-type rsa --cert-name browser.stac.dataspace.copernicus.eu-rsa -n
sudo sed -i '/SSLCertificateKeyFile/a SSLCertificateFile /etc/letsencrypt/live/browser.stac.dataspace.copernicus.eu-rsa/fullchain.pem\nSSLCertificateKeyFile /etc/letsencrypt/live/browser.stac.dataspace.copernicus.eu-rsa/privkey.pem' /etc/apache2/sites-available/000-default-le-ssl.conf
sudo apache2ctl configtest
sudo service apache2 restart
sudo crontab -e
# in crontab, add the following lines (without the leading '# '):
# 0 3 * * * /usr/bin/certbot renew -n
# 0 4 * * * /bin/systemctl restart apache2
