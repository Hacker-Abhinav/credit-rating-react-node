import { Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useAppAlert } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { LabelTitle } from '@/components/Labels';
import { ActionButtonGroup, LinkButton, PrimaryButton } from '@/components/Buttons';

const ACTION_BUTTONS = () => {
  return(
    <ActionButtonGroup>
      <LinkButton path='/dashboard/users'>
        <ArrowBack />
        Back to Users
      </LinkButton>
    </ActionButtonGroup>
  )
}

function UserCreate() {
  const BREADCRUMB = [
    { "title": "Dashboard", "link": "/dashboard" },
    { "title": "Users Management", "link": "/dashboard/users" },
    { "title": "Create User", "link": "/dashboard/users/create" },
  ];

  const { configAlert, presentAlert, dismissAlert } = useAppAlert();

  const onAlertButtonClick = () => {
    presentAlert({
      'title': `Unable to process company!`,
      'body': `Provided Company Name is already in use.`,
    });
  }

  return (
    <AppLayout
      title="Create New User"
      breadcrumbs={BREADCRUMB}
      actionButtons={ACTION_BUTTONS}
      wrappers={{
        "AlertWrapper": { configAlert, dismissAlert }
      }}
    >

      <Box className="container">
        <LabelTitle>Create New User</LabelTitle>
        <PrimaryButton>Submit</PrimaryButton>
        <br />
        <br />
        
        <PrimaryButton color="warning" onClick={onAlertButtonClick}>Make Alert</PrimaryButton>
      </Box>
      
    </AppLayout>
  )
}

export default UserCreate;