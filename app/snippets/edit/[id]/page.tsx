import EditSnippetForm from '@/app/components/UpdateSnippetForm'
import { getSnippetsById } from '@/lib/actions'
import { Snippit } from '@prisma/client'
interface Props {
    params:Promise<{id:string}>
}

const EditSnippetPage = async({params}:Props) => {
    const {id} = await params
    const {data:snippet} = await getSnippetsById(id)
  return (
    <div>
      <EditSnippetForm snippet={snippet as Snippit}/>
    </div>
  )
}

export default EditSnippetPage
