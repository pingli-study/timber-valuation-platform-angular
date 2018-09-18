export interface Roles { 
    conservatorOfForest?: boolean;
    developmentOfficer?: boolean;
    fieldOfficer?: boolean;
    assistantManager?: boolean;
    admin?: boolean;
 }
  
export interface User {
    uid: string;
    email: string;
    roles: Roles;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    photoURL?: string;
}