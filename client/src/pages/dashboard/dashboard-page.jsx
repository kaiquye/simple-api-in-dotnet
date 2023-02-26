import React from 'react';
import { Container, Main } from './style/styles.componets';
import { FindAllUser } from '../../useCases/server/user/find-all-user.api';
export function DashboardPage() {
  const [users, setUsers] = React.useState(null);
  const getAllUsers = new FindAllUser();

  const findAllUsers = async () => {
    const response = await getAllUsers.execute();
    console.log(response);
  };

  React.useEffect(() => {
    async function findAsync() {
      await findAllUsers();
    }

    findAsync();
  }, []);

  return (
    <Container>
      <Main></Main>
    </Container>
  );
}
