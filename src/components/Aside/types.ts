export type S = boolean;
export type useFunc = (state: S) => void;

export interface IProps {
    $useFunc: useFunc;
    $state: S;
    menu: { name: string; key: number }[];
    helpMenu: { name: string; key: number }[];
}
