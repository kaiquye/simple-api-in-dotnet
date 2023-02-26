import React, { useEffect } from 'react';
import { Container, Main } from './style/styles.componets';
export function DashboardPage() {
  const [users, setUsers] = React.useState(null);
  const findAllUsers = () => {};

  React.useEffect(() => {}, []);

  return (
    <Container>
      <Main></Main>
    </Container>
  );
}
