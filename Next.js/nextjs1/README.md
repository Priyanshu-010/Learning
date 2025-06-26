## folder structure

src > app > 
in this the content of app will be in its "page.tsx"


---

## File Based Routing

File Based Routing means routes are made from files(Folders) but the files folder((about > page.tsx) the folder name should be about for routing and the file which contains the content of about should be named "page.tsx") should be made in app folder and should always contain "page.tsx" and everything about that page should be in "page.tsx"

*** App is the Router Basically ***

---

## layout.tsx

layout.tsx means that every file will go or move from this file first and then will be rendered with the content of layout.tsx 
We can use nanvbar and footer component and that will show in each file on each route

For ex: 

<Navbar />
{Childer} any file that is being rendered eg. Home, About, Contact, etc
<Footer />

---


## Link 

It's just like react-router-dom link but has href as attribute

---

## Image

Image is use to diaply images in next.js
for this we can put the image in public folder and then put this line ""public/*": ["./public/*"]" in tsconfig.json in paths
import the image in the file where you wanna use it and then use 
<Image src{the img that is imported}/>

## What we learned 

> Folder Structure
> File Based Routing
> Layout.tsx
> Page.tsx
> Link
> Image