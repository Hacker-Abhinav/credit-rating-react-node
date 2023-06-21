import { useQuery } from 'react-query';
import { Add } from '@mui/icons-material';
import { getRoles } from '@/services/RoleServices';
import AppLayout from '@/layouts/AppLayout';
import { AppDataTable } from '@/components/Tables';
import { ActionButtonGroup, LinkButton } from '@/components/Buttons';

const ACTION_BUTTONS = () => {
  return(
    <ActionButtonGroup>
      <LinkButton path='/dashboard/roles/create'>
        <Add />
        Create Role
      </LinkButton>
    </ActionButtonGroup>
  )
}

function Roles() {
  const params = {};
  const queryKey = `roles_${new Date()}`;
  const { isLoading, data, error } = useQuery({
    queryKey: [queryKey, params], 
    queryFn: getRoles,
    refetchOnWindowFocus: false,
  });

  const BREADCRUMB = [
    { "title": "Dashboard", "link": "/dashboard" },
    { "title": "Roles Management", "link": "/dashboard/roles" },
  ];

  return (
    <AppLayout
      title="Roles Management"
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

export default Roles;