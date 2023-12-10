import React from "react";

export default function Index() {
  return (
    <div>
      <p>
        When exporting a function called getServerSideProps (Server-Side
        Rendering) from a page, Next.js will pre-render this page on each
        request using the data returned by getServerSideProps. This is useful if
        you want to fetch data that changes often, and have the page update to
        show the most current data.
      </p>
      <code>
        export const getServerSideProps = (async (context) ={">"} {})
      </code>
      <h1>context</h1>
      <p>The context parameter is an object containing the following keys:</p>
      <p>
        params : if this page uses a dynamic route, params contains the route
        params. If the page name is [id].js, then params will look like{" "}
        {" id: ... "}.
      </p>
      <p>
        req : the HTTP incoming Message object, with an additional cookies
        props.
      </p>
      <p>res : the HTTP response object</p>
      <p>
        query : An object representing the query string, including dynamic route
        parameters.
      </p>
      <p>
        preview : (Deprecated for draftMode) preview is true if the page is in
        the Preview Mode and false otherwise.
      </p>
      <p>
        previewData : (Deprecated for draftMode) The preview data set by
        setPreviewData.
      </p>
      <p>
        draftMode : draftMode is true if the page is in the Draft Mode and false
        otherwise.
      </p>
      <p>
        resolvedUrl : A normalized version of the request URL that strips the
        _next/data prefix for client transitions and includes original query
        values.
      </p>
      <p>locale : Contains the active locale (if enabled).</p>
      <p>locales : Contains all supported locales (if enabled).</p>
      <p>
        defaultLocale : Contains the configured default locale (if enabled).
      </p>

      <h1>getServerSideProps return values</h1>
      <p>
        props : The props object is a key-value pair, where each value is
        received by the page component. It should be a serializable object so
        that any props passed, could be serialized with JSON.stringify.
      </p>
      <p>
        notFound : With notFound: true, the page will return a 404 even if there
        was a successfully generated page before
      </p>
      <p>
        redirect : The redirect object allows redirecting to internal and
        external resources. It should match the shape of{" "}
        {"destination: string, permanent: boolean"}. In some rare cases, you
        might need to assign a custom status code for older HTTP clients to
        properly redirect. In these cases, you can use the statusCode property
        instead of the permanent property, but not both.
      </p>
    </div>
  );
}
