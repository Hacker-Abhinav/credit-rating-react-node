import { ArrowBack } from '@mui/icons-material';
import AppLayout from '@/layouts/AppLayout';
import { ActionButtonGroup, LinkButton, PrimaryButton } from '@/components/Buttons';
import { ROLE_CREATE_FORM } from '@/schema/FormikForms';
import { InputTextField } from '@/components/TextFields';
import { useState } from 'react';

const ACTION_BUTTONS = () => {
  return(
    <ActionButtonGroup>
      <LinkButton path='/dashboard/roles'>
        <ArrowBack />
        Back to Roles
      </LinkButton>
    </ActionButtonGroup>
  )
}

function RoleCreate() {
  const BREADCRUMB = [
    { "title": "Dashboard", "link": "/dashboard" },
    { "title": "Roles Management", "link": "/dashboard/roles" },
    { "title": "Create Role", "link": "/dashboard/roles/create" },
  ];

  const formik = ROLE_CREATE_FORM();
  
  return (
    <AppLayout
      title="Create New Role"
      breadcrumbs={BREADCRUMB}
      actionButtons={ACTION_BUTTONS}
    >
      <form onSubmit={formik.handleSubmit}>
        <InputTextField sx={{ margin: "20px 0" }} formik={formik} field="email" label="Email Address" />
        <InputTextField sx={{ margin: "20px 0" }} formik={formik} field="password" label="Password" />
        <PrimaryButton variant='outlined' onClick={formik.handleReset} sx={{ marginRight: '5px' }}>
          Reset
        </PrimaryButton>
        <PrimaryButton type="submit">
          Submit
        </PrimaryButton>
      </form>
    </AppLayout>
  )
}

export default RoleCreate;