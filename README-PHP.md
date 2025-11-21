# Karibu Padel Website (PHP Version)

This is the PHP version of the Karibu Padel website, migrated from React.

## Structure

- `index.php`: The main entry point that assembles the page.
- `includes/`: Contains partial PHP files for each section (Header, Navigation, Hero, About, etc.).
- `assets/`: Contains all static resources.
  - `css/style.css`: The compiled Tailwind CSS.
  - `js/main.js`: Vanilla JavaScript for interactivity (Carousels, Mobile Menu, Scroll Animations).
  - `generated/` & `originals/`: Images used on the site.

## Deployment

1. Upload all files in this directory (`index.php`, `includes/`, `assets/`) to your PHP-enabled web server (e.g., `public_html`).
2. Ensure the server supports PHP 7.4 or higher.

## Customization

- To change text or images, edit the corresponding file in the `includes/` directory.
- To change global settings like Title or SEO description, edit `includes/head.php` or the top of `index.php`.
