import includeScripts, { ScriptDefinition } from '../js/utilities/includeScripts';

interface LayoutParams {
  content?: string;
  pageTitle?: string;
  description?: string;
  header?: string;
  footer?: string;
  scripts?: ScriptDefinition[];
  titleSuffix?: string;
  lang?: string;
  htmlAttributes?: string;
  bodyAttributes?: string;
  mainAttributes?: string;
}

const defaultHeader = `<header>
      <p>This is the header.</p>
    </header>`;

const defaultFooter = `<footer>
      <p>This is the footer.</p>
    </footer>`;

const layout = ({
  content = '',
  pageTitle = 'Cohort Project Starter',
  description = 'This is the page description.',
  header = defaultHeader,
  footer = defaultFooter,
  scripts = [],
  titleSuffix = ' | Cohort Project Starter',
  lang = 'en',
  htmlAttributes = '',
  bodyAttributes = '',
  mainAttributes = '',
}: LayoutParams = {}) => `
<!doctype html>

<html lang="${lang}" ${htmlAttributes}>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>${pageTitle}${titleSuffix}</title>
    <meta name="description" content="${description}">

    <link rel="stylesheet" href="/public/styles.css">
  </head>
  <body ${bodyAttributes}>
    ${header}
    <main ${mainAttributes}>${content}</main>
    ${footer}
    ${includeScripts(scripts)}
  </body>
</html>
`;

export default layout;
