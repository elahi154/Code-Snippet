import SnippetDetails from "@/app/components/SnippetDetails";
import { getSnippetsById } from "@/lib/actions";
import { Snippit } from "@prisma/client";

interface Props {
    params:{
        id:string
    }
}

const SnippetDetailPage = async({params}:Props) => {
    const {id} =  params;
    const snippet = await getSnippetsById(id);
  return (
    <div>
      {snippet ? <SnippetDetails snippet={snippet} /> : <p>Snippet not found.</p>}

    </div>
  )
}

export default SnippetDetailPage
