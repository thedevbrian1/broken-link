import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import Nav from "./components/Nav";
import { ChevronRightIcon } from "@heroicons/react/outline";
import styles from "./tailwind.css";
import { navLinks } from "./utils/navLinks";
import FooterTitle from "./components/FooterTitle";
// import { commitSession, getSession } from "./utils/session.server";

export function meta() {
  return {
    charset: "utf-8",
    title: "Digipay",
    viewport: "width=device-width,initial-scale=1",
  };
}

export async function loader({ request }) {
  // const session = await getSession(request.headers.get('Cookie'));
  // console.log('Session from root: ', session);
  // return json(session, {
  //   headers: {
  //     "Set-Cookie": await commitSession(session)
  //   }
  // });
  
}

export function links() {
  return {
    rel: "stylesheet",
    href: styles
  };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="overflow-x-hidden bg-light-gray">
        <Outlet />
        
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
