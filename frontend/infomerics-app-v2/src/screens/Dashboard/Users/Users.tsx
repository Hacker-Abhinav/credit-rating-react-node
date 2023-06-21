import { useQuery } from 'react-query';
import { Add } from '@mui/icons-material';
import { getUsers } from '@/services/UserServices';
import AppLayout from '@/layouts/AppLayout';
import { AppDataTable } from '@/components/Tables';
import { ActionButtonGroup, LinkButton } from '@/components/Buttons';

const ACTION_BUTTONS = () => {
  return(
    <ActionButtonGroup>
      <LinkButton path='/dashboard/users/create'>
        <Add />
        Create User
      </LinkButton>
    </ActionButtonGroup>
  )
}

function Users() {
  const params = {
    "is_active": true,
  };

  const queryKey = `users_${new Date()}`;
  const { isLoading, data, error } = useQuery({
    queryKey: [queryKey, params], 
    queryFn: getUsers,
    refetchOnWindowFocus: false,
  });

  const BREADCRUMB = [
    { "title": "Dashboard", "link": "/dashboard" },
    { "title": "User Management", "link": "/dashboard/users" },
  ];

  return (
    <AppLayout
      title="Users Management"
      breadcrumbs={BREADCRUMB}
      actionButtons={ACTION_BUTTONS}
    >
      <AppDataTable
        isLoading={isLoading}
        data={data}
        error={error}
      />
    </AppLayout>
  )
}

export default Users;