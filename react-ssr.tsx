import { renderToReadableStream } from 'react-dom/server';

const dt = new Intl.DateTimeFormat();

export default {
  port: 3000,
  async fetch(request: Request) {
    return new Response(
      await renderToReadableStream(
        <html>
          <head>
            <title>Hello world</title>
          </head>
          <body>
            <h1>Hello react!</h1>
            <p>The date is {dt.format(new Date())}</p>
          </body>
        </html>
      )
    )
  }
}
