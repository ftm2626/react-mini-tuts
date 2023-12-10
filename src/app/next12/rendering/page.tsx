import React from "react";

export default function Index() {
  return (
    <div>
      <h1>client side rendering (CSR)</h1>
      <p>- default rendering strategy in react. </p>
      <p>
        - The initial request loads a minimal HTML file that includes js files
        responsible for rendering the app.
      </p>
      <p>
        - The client brower then executes the js, fetching data from APIs and
        rendering the page on the client side.
      </p>
      <p>
        - may result in slower initial load times specially for content-heavy
        pages.
      </p>

      <h1>Server side rendering (SSR)</h1>
      <p>
        - Renders the react component on the server and sends the fully rendered
        HTML to the client.
      </p>
      <p>
        - improves initial page load times and ensures that search engines can
        index the content effectively.
      </p>
      <p>
        - beneficial for applications with dynamic data that changes frequenly
        or requires personalized information.
      </p>

      <code>
        To implement SSR in Next.js, you can export a function called
        getServerSideProps from your page component. This function runs on the
        server-side and fetches the necessary data before rendering the
        component. Heres an example:
        {/* const page = ({ data }) => {
          return <div>{data}</div>;
        };

        export async function getServerSideProps() {
          const res = await fetch("https://api.example.com/data");
          const data = await res.json();
          return {
            props: {
              data,
            },
          };
        } */}
      </code>

      <h1>Static Site Generation (SSG)</h1>
      <p>
        - involves pre-rendering the entire website at build time, generating
        static HTML files for each page
      </p>
      <p>- provides excellent performance and security</p>
      <p>- reduces the server load</p>
      <p>
        - ideal for websites with content that doesnt change much. like blogs,
        marketing pages, or documentation.
      </p>
      <code>
        To implement SSG in Next.js, you can export a function called
        getStaticProps from your page component. This function runs at build
        time and fetches the necessary data to render the component. Heres an
        example:
        {/* const page = ({ data }) => {
          return <div>{data}</div>;
        };

        export async function getStaticProps() {
          const res = await fetch("https://api.example.com/data");
          const data = await res.json();
          return {
            props: {
              data,
            },
          };
        } */}
      </code>

      <h1>Increment Static Regeneration (ISR)</h1>
      <p>
        - builds upon SSG by allowing dynamic parts of a page to be regenerated
        on demand
      </p>
      <p>
        - this means that some parts of the page can be static while others can
        be re rendered when data changes
      </p>
      <p>- a balance between performance and freshness of content</p>
      <p>- suitable for apps with frequenly updated content</p>
      <code>
        To implement ISR in Next.js, you can use the revalidate option in the
        getStaticProps function. Heres an example:
        {/* const page = ({ data }) => {
          return <div>{data}</div>;
        };

        export async function getStaticProps() {
          const res = await fetch("https://api.example.com/data");
          const data = await res.json();
          return {
            props: {
              data,
            },
            revalidate:60
          };
        } */}
      </code>
    </div>
  );
}
