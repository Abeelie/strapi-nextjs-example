import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import Navbar from '../componets/navbar/Navbar';
import Footer from "../componets/footer/Footer";
import { parseCookies } from "nookies";
import Router from 'next/router';


const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
  cache: new InMemoryCache()
});


const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
        <Navbar />
          <Component {...pageProps} />
        <Footer />
    </ApolloProvider>
  )
}



const redirectUser = (ctx, location) => {
  if (ctx.req) {
      ctx.res.writeHead(302, { Location: location });
      ctx.res.end();
  } else {
      Router.push(location);
  }
}



MyApp.getInitialProps = async ({ctx}) => {
  const jwt = parseCookies(ctx).jwt;
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/artifacts`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
      },
    });

    if (res.status !== 200) {
      if (ctx.pathname === "/artifacts") {
        redirectUser(ctx, "/login");
      }
    }else {
      if (ctx.pathname === "/login") {
        redirectUser(ctx, "/artifacts");
      }else if (ctx.pathname === "/register") {
        redirectUser(ctx, "/artifacts");
      }
    }

  }catch(error){
    console.error(error);
  }

  return {};
}

export default MyApp
