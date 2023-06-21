import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DefaultLoader } from "../Loader";
import { ErrorCard } from "../Cards";

interface Props {
  isLoading: boolean;
  data: any;
  error: any;
}

const AppDataTable:React.FC<Props> = (props) => {
  const { isLoading, data, error } = props;
  return(
    <div>
      { 
        isLoading && 
        <DefaultLoader />
      }

      { 
        !isLoading && 
        !error &&
        data && 
        <DataGrid
          getRowId={(row) => row.uuid}
          rows={data['rows']}
          columns={data['columns']}
          sx={{ height: 600, width: '100%' }}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      }
      
      {
        !isLoading && 
        error && 
        <ErrorCard />
      }
    </div>
  )
}

export default AppDataTable;