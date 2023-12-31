import { OrgRole } from '@grafana/data';

export enum TeamPermissionLevel {
  Admin = 4,
  Editor = 2,
  Member = 0,
  Viewer = 1,
}

export { OrgRole as OrgRole };

export interface DashboardAclDTO {
  id?: number;
  dashboardId?: number;
  userId?: number;
  userLogin?: string;
  userEmail?: string;
  teamId?: number;
  team?: string;
  permission?: PermissionLevel;
  role?: OrgRole;
  icon?: string;
  inherited?: boolean;
}

export interface DashboardAclUpdateDTO {
  userId?: number;
  teamId?: number;
  role?: OrgRole;
  permission?: PermissionLevel;
}

export interface DashboardAcl {
  id?: number;
  dashboardId?: number;
  userId?: number;
  userLogin?: string;
  userEmail?: string;
  teamId?: number;
  team?: string;
  permission?: PermissionLevel;
  role?: OrgRole;
  icon?: string;
  name?: string;
  inherited?: boolean;
  sortRank?: number;
  userAvatarUrl?: string;
  teamAvatarUrl?: string;
}

export interface DashboardPermissionInfo {
  value: PermissionLevel;
  label: string;
  description: string;
}

export interface NewDashboardAclItem {
  teamId: number;
  userId: number;
  role?: OrgRole;
  permission: PermissionLevel;
  type: AclTarget;
}

export enum PermissionLevel {
  View = 1,
  Edit = 2,
  Admin = 4,
}

export enum PermissionLevelString {
  View = 'View',
  Edit = 'Edit',
  Admin = 'Admin',
}

export enum SearchQueryType {
  Folder = 'dash-folder',
  Dashboard = 'dash-db',
  AlertFolder = 'dash-folder-alerting',
}

export enum DataSourcePermissionLevel {
  Query = 1,
  Admin = 2,
}

export enum AclTarget {
  Team = 'Team',
  User = 'User',
  ServiceAccount = 'ServiceAccount',
  Viewer = 'Viewer',
  Editor = 'Editor',
}

export interface AclTargetInfo {
  value: AclTarget;
  label: string;
}

export const dataSourceAclLevels = [
  { value: DataSourcePermissionLevel.Query, label: 'Query', description: 'Can query data source.' },
];

export const dashboardAclTargets: AclTargetInfo[] = [
  { value: AclTarget.Team, label: 'Team' },
  { value: AclTarget.User, label: 'User' },
  { value: AclTarget.Viewer, label: 'Everyone With Viewer Role' },
  { value: AclTarget.Editor, label: 'Everyone With Editor Role' },
];

export const dashboardPermissionLevels: DashboardPermissionInfo[] = [
  { value: PermissionLevel.View, label: PermissionLevelString.View, description: 'Can view dashboards.' },
  {
    value: PermissionLevel.Edit,
    label: PermissionLevelString.Edit,
    description: 'Can add, edit and delete dashboards.',
  },
  {
    value: PermissionLevel.Admin,
    label: 'Admin',
    description: 'Can add/remove permissions and can add, edit and delete dashboards.',
  },
];

export interface TeamPermissionInfo {
  value: TeamPermissionLevel;
  label: string;
  description: string;
}

export const teamsPermissionLevels: TeamPermissionInfo[] = [
  { value: TeamPermissionLevel.Member, label: 'Member', description: 'Is team member' },
  {
    value: TeamPermissionLevel.Admin,
    label: 'Admin',
    description: 'Can add/remove permissions, members and delete team.',
  },
];
