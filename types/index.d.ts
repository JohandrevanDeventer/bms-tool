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

declare type SupportedGateway ={
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