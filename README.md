# Backend

Make sure you are in the backend directory

```shell
cd backend
```

### Install UV and dependencies

Install command:
```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Install python 3.12:
```shell
uv python install 3.12
```

Setup your venv:
```shell
uv venv --python 3.12
```

Initialise the venv:
```shell
source .venv/bin/activate
```

Install packages:
```shell
uv sync
```

### Run API

Run api with hot reload:
```shell
uv run fastapi dev
```


# Frontend

Make sure you are in the front end directory

```shell
cd frontend
```

### Install node and dependencies

Install nvm:
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

\. "$HOME/.nvm/nvm.sh"
```

Install node 22:
```shell
nvm install 22
nvm use 22
```

Install dependencies:
```shell
npm install --global yarn
yarn install
```

Run frontend:
```shell
yarn dev
```
