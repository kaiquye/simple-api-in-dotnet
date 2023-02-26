import React from 'react';
import './style/style.module.css';
import { Container, Main } from './style/styles.componets';
import { FindAllUser } from '../../useCases/server/user/find-all-user.api';
export function DashboardPage() {
  const [users, setUsers] = React.useState(null);
  const getAllUsers = new FindAllUser();

  const findAllUsers = async () => {
    const response = await getAllUsers.execute();
    setUsers(response.data[0]);
  };

  React.useEffect(() => {
    async function findAsync() {
      await findAllUsers();
    }

    findAsync();
  }, []);

  return (
    <Container>
      <Main>
        <table>
          <tr>
            <th>Fist name</th>
            <th>Last name</th>
            <th>E-mail</th>
          </tr>
          {users &&
            users.map((user) => (
              <>
                <tr>
                  <td>{user.fist_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                </tr>
              </>
            ))}
        </table>
      </Main>
    </Container>
  );
}
