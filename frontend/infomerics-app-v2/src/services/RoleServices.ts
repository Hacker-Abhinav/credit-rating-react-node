import { QueryFunction } from "react-query";
import { HTTP_CLIENT } from "@/helpers/Api";
import { GET_ENDPOINT } from "@/constants/ApiEndpoints";
import { ROLE_TABLE_COLUMNS } from "@/schema/Tables/Roles";

export const getRoles: QueryFunction<any> = async ({ queryKey }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [_, params] = queryKey;
      const response:any = await HTTP_CLIENT(GET_ENDPOINT("ROLES.LIST"), { params });
      const rows = response["roles"];
      const columns = ROLE_TABLE_COLUMNS;
      
      resolve({
        "columns": columns,
        "rows": rows,
      });

    } catch (error) {
      reject(error);
    }
  });
} 