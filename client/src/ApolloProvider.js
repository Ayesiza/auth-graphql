import React from 'react';
//import 'semantic-ui-css/semantic.min.css'
import App from './App';
import ApolloClient from 'apollo-client'
import{InMemoryCache} from 'apollo-cache-inmemory'
import { createHttpLink} from 'apollo-link-http'
import { ApolloProvider} from '@apollo/react-hooks'
import { BrowserRouter } from 'react-router-dom';

const httpLink = createHttpLink({
uri: 'http://localhost:5000'
});

const client = new ApolloClient({
link: httpLink,
cache: new InMemoryCache()
});

export default (
    <BrowserRouter>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    </BrowserRouter>
)