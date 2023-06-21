server {
  listen 80 default_server;
  listen [::]:80 default_server;
  server_name _;
  index index.html;
  root /home/cognadmin/frontend;
  error_log /home/cognadmin/logs/errors.log;
  
  client_max_body_size 32M;
  
  location / {
    try_files $uri $uri/ /index.html =404;
  }
  
  location /api {
    include proxy_params;
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header X-Script-Name /api;
  }
}
