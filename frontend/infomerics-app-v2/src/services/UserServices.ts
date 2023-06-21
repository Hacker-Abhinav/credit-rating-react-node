import { QueryFunction } from "react-query";
import { HTTP_CLIENT } from "@/helpers/Api";
import { GET_ENDPOINT } from "@/constants/ApiEndpoints";
import { USER_TABLE_COLUMNS } from "@/schema/Tables/Users";

export const getUsers: QueryFunction<any> = async ({ queryKey }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [_, params] = queryKey;
      const response:any = await HTTP_CLIENT(GET_ENDPOINT("USERS.LIST"), { "is_active": true });
      const rows = response["users"];
      const columns = USER_TABLE_COLUMNS;
      
      resolve({
        "columns": columns,
        "rows": rows,
      });

    } catch (error) {
      reject(error);
    }
  });
} 