# Droplet

## SSH GitHub Droplet Access
Location: /root/.ssh/id_gh_gol_manager
Password: golmanager0
Public Key:
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIONfRLerK13SZyj5OcJK1LONfMIdIsG4zvNSoLvAhKZQ gol-manager@digital-ocean-droplet.com

## PM2
The API is running into a process called `gol-manager-api`
Actions you can do:
Kill: `pm2 stop gol-manager-api`
Logs: `pm2 logs gol-manager-api`
Restart: `pm2 restart gol-manager-api --update-env`

The `--update-env` flag is used to reload the ENV variables described in the `ecosystem.config.js` file

## Env variables
Location: /home/api/gol-manager-nest/ecosystem.config.js

Manually modify the variables you need and run the restart command

## NGINX
Currently configuration for localhost only it's at
Location: /etc/nginx/sites-available/local-api 

