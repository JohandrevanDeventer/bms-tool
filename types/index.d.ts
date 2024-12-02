declare type SignUpParams = {
  username?: string
  firstName?: string;
  lastName?: string;
  idNumber?: string;
  address1?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  dateOfBirth?: string;
  email: string;
  password: string;
};

declare type User = {
  // $id: string;
  // email: string;
  // userId: string;
  // username: string;
  firstName: string;
  lastName: string;
  // idNumber: string;
  // address1: string;
  // city: string;
  // province: string;
  // postalCode: string;
  // dateOfBirth: string;
};

declare type BreadCrumb = {
  label: string;
  href?: string;
}

declare type Point = {
  id: number;
  name: string;
  description: string;
  unit: string;
}

declare type DeviceType = {
  id: number;
  name: string;
}

declare type Brand = {
  id: number;
  name: string;
  logo: string;
  url: string;
}

declare type SupportedGateway = {
  id: number;
  name: string;
  logo: string;
  url: string;
}

declare type SupportedProtocol = {
  id: number;
  name: string;
}

declare type Device = {
  id: number;
  deviceType: string;
  brand: string;
  model: string;
  points: string[];
  supportedGateways: string[];
  supportedProtocols: string[];
}

declare interface SignInProps {
  email: string;
  password: string;
}

declare interface SidebarProps {
  user: User;
}

declare interface TitleBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface BreadCrumbProps {
  steps: BreadCrumb[];
}