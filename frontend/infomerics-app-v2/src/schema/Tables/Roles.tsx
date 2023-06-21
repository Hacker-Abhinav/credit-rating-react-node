import React from "react";
import { BadgeStatus } from "@/components/Badges";
import { PrimaryButton } from "@/components/Buttons";
import { IconEdit } from "@/components/Icons";

const ROLE_TABLE_COLUMNS = [
  {
    field: 'name',
    headerName: 'Name',
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
    field: 'description',
    headerName: 'Description',
    width: 350,
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
  ROLE_TABLE_COLUMNS,
}