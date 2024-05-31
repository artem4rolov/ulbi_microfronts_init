// declaration.d.ts
declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const __PLATFORM__: 'mobile' | 'desktop';
