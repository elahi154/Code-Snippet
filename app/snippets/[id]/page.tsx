import SnippetDetails from "@/app/components/SnippetDetails";
import { getSnippetsById } from "@/lib/actions";
import { Snippit } from "@prisma/client";
import { PageProps } from "next";  // ✅ Import PageProps to match Next.js expectations

const SnippetDetailPage = async ({ params }: PageProps) => {
    const { id } = params as { id: string }; // ✅ Explicitly type params

    const snippet = await getSnippetsById(id);

    return (
        <div>
            <SnippetDetails snippet={snippet as Snippit} />
        </div>
    );
};

export default SnippetDetailPage;


