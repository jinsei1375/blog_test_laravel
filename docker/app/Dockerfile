FROM php:8.1-fpm

ENV TZ Asia/Tokyo

RUN apt-get update && apt-get install -y \
    zip \
    zlib1g-dev \
    libzip-dev \
    libicu-dev \
    libpng-dev \
    libonig-dev \
    unzip \
    git \
    && docker-php-ext-install \
    pdo_mysql \
    mbstring \
    zip \
    exif \
    pcntl \
    bcmath \
    gd \
    && docker-php-ext-configure intl

# install stable node and latest npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get install -y nodejs
RUN apt-get install -y npm

# install xdebug
RUN pecl install xdebug && docker-php-ext-enable xdebug
		
COPY ./docker/app/php.ini /usr/local/etc/php/php.ini

COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

WORKDIR /app