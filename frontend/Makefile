include ./.env
export

help: ## Show this help
    @echo "Usage: make [options] [target] ..."; \
    echo "Targets:"; \
    fgrep -h '##' Makefile| awk -F'##|: ' '{printf "%40s %s\n", $$1, $$3}' | freg -v 'fgrep';

dev: ## serve for development
    @echo "starting Dev environment"
    @ch frontend && npm start &
    @ch backend && php artisan serve

install: ## performs initial setup
    @echo "Installing libraries"
    @cd backend && composer install && cp env.example .env
    @cd frontend && npm install