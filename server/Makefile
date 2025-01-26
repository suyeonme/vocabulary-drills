.PHONY: poetry-install
poetry-install:
	@command -v poetry >/dev/null 2>&1 || (echo "Poetry not found. Installing version 1.8.5." && curl -sSL https://install.python-poetry.org | python3 - --version 1.8.5 && echo "Poetry 1.8.5 installed")


.PHONY: install
install: poetry-install
	poetry install --with dev 


.PHONY: lint
lint: install
	poetry run isort --diff --check-only .
	poetry run black --diff --check .
	poetry run ruff check .

.PHONY: format
format: install
	poetry run isort .
	poetry run black .
	poetry run ruff format .

.PHONY: test
test: install
	poetry run pytest tests -v

.PHONY: start-server
start-server: poetry-install
	poetry run uvicorn app.main:app --reload
