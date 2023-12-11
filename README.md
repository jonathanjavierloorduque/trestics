sudo apt update
sudo apt install apache2
sudo apt install mysql-server
sudo mysql_secure_installation
no
yes
no
yes
no
sudo mysql
mysql>exit;
sudo apt install php libapache2-mod-php php-mysql
php -v
sudo mkdir /var/www/trecnocloud
sudo chown -R $USER:$USER /var/www/trecnocloud

sudo nano /etc/apache2/sites-available/trecnocloud.conf
<VirtualHost *:80>
    #ServerName tu-dominio
    #ServerAlias www.tu-dominio
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/trestics
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
<IfModule mod_ssl.c>
	<VirtualHost _default_:443>
		ServerAdmin webmaster@localhost

		DocumentRoot /var/www/trestics
		
		ErrorLog ${APACHE_LOG_DIR}/error.log
		CustomLog ${APACHE_LOG_DIR}/access.log combined

		SSLEngine on

		
		SSLCertificateFile	/etc/ssl/certs/ssl-cert-snakeoil.pem
		SSLCertificateKeyFile /etc/ssl/private/ssl-cert-snakeoil.key

		#SSLCertificateChainFile /etc/apache2/ssl.crt/server-ca.crt

		#SSLOptions +FakeBasicAuth +ExportCertData +StrictRequire
		<FilesMatch "\.(cgi|shtml|phtml|php)$">
				SSLOptions +StdEnvVars
		</FilesMatch>
		<Directory /usr/lib/cgi-bin>
				SSLOptions +StdEnvVars
		</Directory>


	</VirtualHost>
</IfModule>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet



sudo a2ensite trecnocloud
sudo a2dissite 000-default
sudo apache2ctl configtest
sudo systemctl reload apache2

sudo nano /var/www/trecnocloud/index.html
<html>
  <head>
    <title>TrecnoCloud</title>
  </head>
  <body>
    <h1>Hola Mundo</h1>
    <p>Esto es una prueba de TrecnoCloud</p>
  </body>
</html>

sudo nano /var/www/trecnocloud/info.php
<?php
phpinfo();


LO QUE DEBERIA USAR EN INDEX EN VEZ DEL SUCCESS
!--<script> window.location.href="index.php"; </script>
        <meta http-equiv="refresh" content="0; URL=index.php">-->
        
        
flask run --cert=/var/www/trestics/cert.pem --key=/var/www/trestics/key.pem

export FLASK_RUN_HOST=0.0.0.0
flask run --cert=/var/www/trestics/cert.pem --key=/var/www/trestics/key.pem
