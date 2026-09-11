# Regenerates the self-signed SSL certificate and reloads Apache.
# Must run as root. Runs yearly via /etc/cron.d/renew-ssl-cert, see install.sh.
# 825 days is the maximum validity Apple platforms accept for manually
# trusted certificates; yearly renewal keeps a large safety margin.
DOMAIN="browser.stac.opensearch.dataspace.copernicus.eu"
SSL_DIR="/etc/apache2/ssl"

mkdir -p "$SSL_DIR"
openssl req -x509 -nodes -newkey rsa:4096 -days 825 \
    -keyout "$SSL_DIR/browser.key" \
    -out "$SSL_DIR/browser.crt" \
    -subj "/CN=$DOMAIN" \
    -addext "subjectAltName=DNS:$DOMAIN"
chmod 600 "$SSL_DIR/browser.key"

# Apache only reads certificates on startup/reload
service apache2 reload
