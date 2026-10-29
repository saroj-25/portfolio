import DetailPage, { detailMetadata } from "@/components/DetailPage";
import { detailPages } from "@/data/caseStudies";
const page = detailPages.chatbot;
export const metadata = detailMetadata(page);
export default function Page() { return <DetailPage page={page} />; }
