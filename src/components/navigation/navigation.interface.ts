interface IAppNavigationItem {
  name: string;
  link: string;
}

export interface TitleRoutes {
  title:string;
  route:string;

}

export type TAppNavigation = IAppNavigationItem[];
