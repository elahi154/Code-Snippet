import SearchBar from "@/app/components/SearchBar"
//import SnippetList from "@/app/components/SnippetList"
import { getSnippetsByTech } from "@/lib/actions"
import { Technology } from "@prisma/client"


interface Props{
    params:{
        tech:Technology,
    }
}
const TechnologyPage = async({params}:Props) => {
    const {tech} = await params;
    const {data:snippets} = await getSnippetsByTech(tech)
  return (
    <div>
      <SearchBar snippets={snippets}/>
    </div>
  )
}

export default TechnologyPage
