import { PropsWithChildren } from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { SessionProviderProps } from "next-auth/react";

export const metadata = {
  title: "Promptopia",
  discription: "Discover & Share AI Prompts",
};

const RootLayout = ({ session, children }: SessionProviderProps) => {
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
