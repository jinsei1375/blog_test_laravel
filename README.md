# ブログ解説用テスト環境

## mysql ログイン

docker-compose exec -it db bash
mysql -u root_user -ppassword --default-character-set=utf8mb4 blog_sample
