
//import prisma from "@/prisma/db";
import SearchBar from "./components/SearchBar";
//import SnippetList from "./components/SnippetList";

import { getAllSnippets } from "@/lib/actions";


export default async function Home() {
  const {data : snippets } = await getAllSnippets();
  return (
    <div>
        
        <SearchBar snippets = {snippets}/>

    </div>
  );
}
