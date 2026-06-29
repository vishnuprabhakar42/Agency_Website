import { PAGES } from '@/lib/pages.generated';
import PageRuntime from '@/components/PageRuntime';

// Server component: renders the page's markup into SSR HTML (crawlable),
// then mounts the client runtime that wires animations + interactions.
export default function DcPage({ name }) {
  const page = PAGES[name];
  return (
    <>
      <div id="dc-root" dangerouslySetInnerHTML={{ __html: page.html }} />
      <PageRuntime name={name} />
    </>
  );
}
