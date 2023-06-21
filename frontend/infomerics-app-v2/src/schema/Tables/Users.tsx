import React from "react";
import { BadgeStatus } from "@/components/Badges";
import { PrimaryButton } from "@/components/Buttons";
import { IconEdit } from "@/components/Icons";

const USER_TABLE_COLUMNS = [
  {
    field: 'employee_code',
    headerName: 'Code',
    minWidth: 90,
  },
  {
    field: 'full_name',
    headerName: 'Full Name',
    minWidth: 350,
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 350,
  },
  {
    field: 'is_active',
    headerName: 'Status',
    minWidth: 50,
    renderCell: (params:any) => (
      <React.Fragment>
        <BadgeStatus
          status={params.row.is_active}
        />
      </React.Fragment>
    )
  },
  {
    field: 'uuid',
    headerName: '',
    flex: 0.3,
    minWidth: 50,
    width: 50,
    align: 'right',
    renderCell: (params:any) => (
      <React.Fragment>
        <PrimaryButton>
          <IconEdit />
          Edit
        </PrimaryButton>
      </React.Fragment>
    )
  },
];

export {
  USER_TABLE_COLUMNS,
}