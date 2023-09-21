import Users from "../components/Users";

export default function User({ users }) {
  return users.map((user) => {
    return <Users user={user} />;
  });
}
