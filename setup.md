## laravel install
```bash
$ composer create-project --prefer-dist laravel/laravel="8.*" laravel7-react
```

## laravel/ui,react
```bash
$ composer require laravel/ui "3.*"
$ php artisan ui react
```

## Remove Mix
```bash
$ rm webpack.mix.js
$ npm uninstall laravel-mix
```

## vite
```bash
$ npm install --save react react-dom
$ npm install --save-dev vite@latest @vitejs/plugin-react vite-plugin-laravel
$ npm install --save-dev typescript @types/react @types/react-dom
```
* vite.config.jsの作成
```javascript:vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
    ],
    server: {
        host: true,
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true
        },
    },
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: ['resources/ts/App.css', 'resources/ts/main.tsx'],
        },
    }
})
```
* tsconfig.jsonの設置
```json:tsconfig.json
{
    "compilerOptions": {
        "target": "ES2020",
        "useDefineForClassFields": true,
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "module": "ESNext",
        "skipLibCheck": true,

        /* Bundler mode */
        "moduleResolution": "bundler",
        "allowImportingTsExtensions": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx",

        /* Linting */
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true
    },
    "include": ["resources/ts/**/*"]
}
```

## Eslintの設定
```bash
$ npx eslint --init

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

* .eslintrc.jsonの設置
```json:.eslintrc.json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
        "plugin:storybook/recommended"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
```

## prettierの設定（グローバルなのでIDEで設定）
```bash
$ npm install eslint-config-prettier --save-dev
```

## 各種パッケージのインストール
```json:package.json
{
    "name": "laravel8-react-stickies",
    "private": true,
    "scripts": {
        "dev": "vite",
        "build": "vite build",
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-error-boundary": "^3.1.3",
        "react-helmet-async": "^1.1.2",
        "react-hook-form": "^7.7.1",
        "react-query": "^3.34.15",
        "react-query-auth": "^1.0.0",
        "react-router-dom": "^6.0.0-beta.0"
    },
    "devDependencies": {
        "@hookform/resolvers": "^2.5.2",
        "@types/react": "^18.2.28",
        "@types/react-dom": "^18.2.13",
        "@typescript-eslint/eslint-plugin": "^6.7.5",
        "@typescript-eslint/parser": "^6.7.5",
        "@vitejs/plugin-react": "^4.1.0",
        "axios": "^0.21",
        "eslint": "^8.51.0",
        "eslint-config-prettier": "^9.0.0",
        "eslint-plugin-react": "^7.33.2",
        "lodash": "^4.17.19",
        "postcss": "^8.1.14",
        "sass": "^1.32.11",
        "sass-loader": "^11.0.1",
        "typescript": "^5.2.2",
        "vite": "^4.4.11",
        "vite-plugin-laravel": "^0.3.1",
        "zod": "^3.1.0",
        "zustand": "^3.5.2"
    }
}
```
``` bash
$ npm install
$ npm prune
```

## storybookのインストール
```bash
$ npx storybook@latest init
```
Dockerコンテナの6006ポートを開ける

## jestのインストール
```bash
$ npm install jest --save-dev
$ npm install @types/jest --save-dev
$ npm install ts-jest --save-dev
```
* jest.config.jsonの作成
```json:jest.config.json
{
    "roots": [
        "<rootDir>/resources/ts"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    }
}
```
* TestingLibraryの追加
```bash
$ npm install --save-dev @testing-library/react
$ npm install --save-dev @testing-library/jest-dom
$ npm install --save-dev @testing-library/user-event
```

## chakra-uiの追加
```bash
$ npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## 最終的なpackage.json
```json:package.json
{
  "name": "laravel8-react-stickies",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "jest --config ./jest.config.json",
    "test:watch": "npm run test -- --watch",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "@chakra-ui/react": "^2.8.1",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "framer-motion": "^10.16.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-error-boundary": "^3.1.3",
    "react-helmet-async": "^1.1.2",
    "react-hook-form": "^7.7.1",
    "react-query": "^3.34.15",
    "react-query-auth": "^1.0.0",
    "react-router-dom": "^6.0.0-beta.0"
  },
  "devDependencies": {
    "@hookform/resolvers": "^2.5.2",
    "@storybook/addon-essentials": "^7.4.6",
    "@storybook/addon-interactions": "^7.4.6",
    "@storybook/addon-links": "^7.4.6",
    "@storybook/addon-onboarding": "^1.0.8",
    "@storybook/blocks": "^7.4.6",
    "@storybook/react": "^7.4.6",
    "@storybook/react-vite": "^7.4.6",
    "@storybook/testing-library": "^0.2.2",
    "@testing-library/jest-dom": "^6.1.4",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.5.1",
    "@types/jest": "^29.5.5",
    "@types/react": "^18.2.28",
    "@types/react-dom": "^18.2.13",
    "@typescript-eslint/eslint-plugin": "^6.7.5",
    "@typescript-eslint/parser": "^6.7.5",
    "@vitejs/plugin-react": "^4.1.0",
    "axios": "^0.21",
    "eslint": "^8.51.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-storybook": "^0.6.15",
    "jest": "^29.7.0",
    "lodash": "^4.17.19",
    "postcss": "^8.1.14",
    "sass": "^1.32.11",
    "sass-loader": "^11.0.1",
    "storybook": "^7.4.6",
    "ts-jest": "^29.1.1",
    "typescript": "^5.2.2",
    "vite": "^4.4.11",
    "vite-plugin-laravel": "^0.3.1",
    "zod": "^3.1.0",
    "zustand": "^3.5.2"
  }
}
```
## git
wslのubuntu上でgit initしてリモートリポジトリを設定  
~~windowsからgit init~~  
~~dockerコンテナからgit init~~
