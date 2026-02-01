# Laravel + React blog app

## Подготовка: 
* Убедитесь что у вас включен Docker-desktop
* Установлен nodejs

### Установка:
Склонируйте репозиторий и перейдите в папку с проектом
```
  git clone https://github.com/evgenykoveshnikov/simpleLaravelReactBlog.git
  cd simpleLaravelReactBlog/
```
***
### Настройка .env файлов:
Выполните эти команды 
```
  cp .env.example .env
  cd backend/
  cp .env.example .env
```
В .env файле в папке backend расскоментируйте поля связанные с базой данных 

***
### Запуск docker-compose:
перейдите в корень проекта и выполните
```
  docker-compose up -d --build
```
После запуска убедитесь что все заработало через 
```
  docker-compose ps
```

Затем выполните эти команды по очередности
```
  docker-compose exec app composer install
  docker-compose exec app php artisan key:generate
  docker-compose exec app php artisan migrate --seed
```
***

### Запуск фронтенда:
Перейдите в папку frontend и выполните команды 
```
  cd frontend/
  npm install
  npm run dev
```
***
frontend будет доступен по адресу 
#### http://localhost:5173
Backend будет доступен по адресу 
#### http://localhost:8080

Пути для backend
* GET /api/articles - получить все статьи
* GET /api/articles/{id} - получить одну статью
* POST /api/articles - создать статью (Body с полями title и content)
* POST /api/articles/{id}/comments - добавить комментарий к статье (Body с полями author_name и content)

