import SearchForm from "@/components/SearchForm";
import ThumbnailList from "@/components/ThumbnailList";

export default async function RootPage() {
  return (
    <main className="p-4">
      <SearchForm />
      <ThumbnailList />
    </main>
  );
}
