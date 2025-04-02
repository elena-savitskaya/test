import { useEffect, useState } from "react";
import { UserItem } from "./user-item";
import { User } from "../types/user";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const toggleUserDetails = (userId: number) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  return (
    <main className="content">
      <h2>Users List</h2>
      <ul className="users">
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            expandedUserId={expandedUserId}
            toggleUserDetails={toggleUserDetails}
          />
        ))}
      </ul>
    </main>
  );
};
