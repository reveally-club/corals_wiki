import ClientPage from "./page.client";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  try {
    // TODO: Client, Data Fetch
    <ClientPage params={params} />;
  } catch (e) {
    console.error(e);
  }
};

export default DetailPage;
