import DetailPage, { detailMetadata } from "@/components/DetailPage";
import { detailPages } from "@/data/caseStudies";
const page = detailPages.writing;
export const metadata = detailMetadata(page);
export default function Page() { return <DetailPage page={page} />; }
