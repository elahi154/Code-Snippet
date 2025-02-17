import SnippetDetails from "@/app/components/SnippetDetails";
import { getSnippetsById } from "@/lib/actions";
import { Snippit } from "@prisma/client";

interface Props {
    params: {
        id: string;
    };
}

const SnippetDetailPage = async ({ params }: Props) => {
    // ✅ params is already an object, no need to use `await`
    const { id } = params; 

    // ✅ Ensure the function call is correct
    const snippet = await getSnippetsById(id);

    return (
        <div>
            <SnippetDetails snippet={snippet as Snippit} />
        </div>
    );
};

export default SnippetDetailPage;

