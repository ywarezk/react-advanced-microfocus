# Server Side Rendering

## Problems with SPA

- initial load
First contentful paint

5 sec for first contentful paint
10-30 sec first contentful paint

if the first contentful paint takes longer than 3 sec you will lose 50% of the users

- SEO - Search engine optimization

you get poor result for indexing js files

## React can run on Node.js

Node.js can produce HTML representation of our react components

## How does this face help us?

In regular SPA

   Browser					Server

microfocus.com             empty html


ask for js files            send js files


present the screen



In SPA with SSR


    Browser                   Server
	
microfocus.com               full HTML

     FCP
	 
ask for js files            send js files


update the screen
with js files






