import Product from "../components/Product";

export default function Products({ users, isLoading }) {
  console.log(users);
  console.log(isLoading);
  return (
    <section className="text-gray-600 min-h-screen body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {users.map((user) => {
            return <Product product={user} />;
          })}
        </div>
      </div>
    </section>
  );
}
