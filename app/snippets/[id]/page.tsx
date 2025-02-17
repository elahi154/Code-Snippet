import SnippetDetails from "@/app/components/SnippetDetails";
import { getSnippetsById } from "@/lib/actions";
import { Snippit } from "@prisma/client";

interface Params {
    id: string;
}

interface Props {
    params: Params;
}

const SnippetDetailPage = async ({ params }: Props) => {
    const { id } = params;
    const snippet = await getSnippetsById(id);

    return (
        <div>
            <SnippetDetails snippet={snippet as Snippit} />
        </div>
    );
};

export default SnippetDetailPage;


