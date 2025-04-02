import { User } from "../types/user";

export const UserItem = ({
  user,
  expandedUserId,
  toggleUserDetails,
}: {
  user: User;
  expandedUserId: number | null;
  toggleUserDetails: (id: number) => void;
}) => {
  return (
    <li className="user-item">
      <div className="user-header">
        {user.name}
        <button onClick={() => toggleUserDetails(user.id)}>
          {expandedUserId === user.id ? "Сховати деталі" : "Показати деталі"}
        </button>
      </div>
      {expandedUserId === user.id && (
        <div className="user-details expanded">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Телефон:</strong> {user.phone}
          </p>
        </div>
      )}
    </li>
  );
};
