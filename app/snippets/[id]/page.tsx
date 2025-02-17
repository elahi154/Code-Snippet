import SnippetDetails from "@/app/components/SnippetDetails";
import { getSnippetsById } from "@/lib/actions";
import { Snippit } from "@prisma/client";

interface Props {
    params:{
        id:string
    }
}

const SnippetDetailPage = async({params}:Props) => {
    const {id} = await params;
    const {data:snippet} = await getSnippetsById(id)
  return (
    <div>
      <SnippetDetails snippet={snippet as Snippit}/>
    </div>
  )
}

export default SnippetDetailPage
