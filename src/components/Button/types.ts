export type sizeType = { width: number; height: number };
export type color = string;
export type textColor = string;
export interface IRON {
    text: string;
    callback?: () => void;
    color?: color;
    textColor?: textColor;
    size?: sizeType;
    effect?: string | boolean;
}
