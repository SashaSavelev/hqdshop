import { Header } from "./components/Header/Header";




export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
     <Header>3</Header>
       {children}

   </div>
   
  );
}
