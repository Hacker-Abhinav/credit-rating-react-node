interface IRole {
  uuid: string;
  name: string;
  permissions: any[];
  description: string;
  is_active: boolean;
}