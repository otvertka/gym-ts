export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}

export interface IBenefitInfo {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface IClassesInfo {
    name: string;
    description?: string;
    image: string;
}