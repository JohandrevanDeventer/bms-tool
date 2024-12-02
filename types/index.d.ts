declare type User = {
  // $id: string;
  // email: string;
  // userId: string;
  firstName: string;
  lastName: string;
  // address1: string;
  // city: string;
  // state: string;
  // postalCode: string;
  // dateOfBirth: string;
  // ssn: string;
};

declare interface SidebarProps {
  user: User;
}

declare interface TitleBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}