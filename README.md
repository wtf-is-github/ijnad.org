# ijnad.org - Минималистичный блог

Простой блог на Astro с поддержкой Markdown статей, черно-белым минималистичным дизайном и автоматическим деплоем на GitHub Pages.

## Технологии

- **Astro** - SSG фреймворк
- **Tailwind CSS** - утилитарный CSS фреймворк
- **Content Collections** - для управления статьями
- **GitHub Pages** - хостинг
- **GitHub Actions** - автоматический деплой

## Разработка

### Установка зависимостей

```bash
npm install
```

### Запуск dev сервера

```bash
npm run dev
```

Сайт будет доступен по адресу `http://localhost:4321/`

### Сборка

```bash
npm run build
```

### Предпросмотр сборки

```bash
npm run preview
```

## Добавление статей

Статьи добавляются в папку `content/blog/` в формате Markdown.

### Формат статьи

Каждая статья должна начинаться с frontmatter:

```markdown
---
title: "Название статьи"
description: "Краткое описание (опционально)"
pubDate: 2024-01-15
updatedDate: 2024-01-20  # опционально
---

# Содержание статьи

Текст статьи в формате Markdown...
```

### Пример

Создайте файл `content/blog/my-article.md`:

```markdown
---
title: "Моя первая статья"
description: "Описание статьи"
pubDate: 2024-01-15
---

# Заголовок

Текст статьи...
```

## Деплой

Деплой происходит автоматически через GitHub Actions при каждом push в ветку `main`.

### Настройка GitHub Pages

1. Перейдите в Settings → Pages вашего репозитория
2. В разделе "Source" выберите "GitHub Actions"
3. После первого push в `main` workflow автоматически соберет и задеплоит сайт

### Настройка домена

Домен `ijnad.org` уже настроен через файл `public/CNAME`. Убедитесь, что:

1. В настройках DNS вашего домена добавлена CNAME запись, указывающая на `username.github.io`
2. Файл `public/CNAME` содержит правильный домен

## Структура проекта

```
ijnad/
├── src/
│   ├── layouts/          # Layout компоненты
│   ├── pages/            # Страницы сайта
│   ├── components/       # React/Astro компоненты
│   └── styles/           # Глобальные стили
├── content/
│   └── blog/            # MD статьи
├── public/              # Статические файлы
└── .github/
    └── workflows/       # GitHub Actions
```

## Лицензия

MIT
