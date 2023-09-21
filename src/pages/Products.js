import Product from "../components/Product";

export default function Products({ users }) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {/* {users.map((user) => {
            return <Users user={user} />;
          })} */}
          <Product />
        </div>
      </div>
    </section>
  );
}
