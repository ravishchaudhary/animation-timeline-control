import { TimelineRow } from '../timelineRow';
import { TimelineOptions } from '../settings/timelineOptions';
import { TimelineRowStyle } from '../settings/styles/timelineRowStyle';
import { TimelineKeyframeStyle } from '../settings/styles/timelineKeyframeStyle';
export declare class TimelineStyleUtils {
    /**
     * Get keyframe style from a keyframe, than from a row, than from a global settings.
     * @param keyframe keyframe to get style for.
     * @param row keyframe row.
     * @param propertyName property to get.
     * @param defaultValue default value to return
     * @param reverseOrder reverse styling order: global, row, keyframe
     */
    static getKeyframeStyle<T>(keyframeStyle: TimelineKeyframeStyle | null, rowStyle: TimelineRow | null, options: TimelineOptions | null, propertyName: string, defaultValue?: T, reverseOrder?: boolean): T;
    /**
     * Get row style from default settings or overrides by a row settings.
     */
    static getRowStyle<T>(rowStyle: TimelineRowStyle, options: TimelineOptions | null, propertyName: string, defaultValue?: T, reverseOrder?: boolean): T | undefined;
    /**
     * Get current row height from styling
     */
    static getRowHeight(rowStyle: TimelineRowStyle, options: TimelineOptions): number;
    static rowStripeHeight(rowStyle: TimelineRowStyle, options: TimelineOptions): number | string;
    static stripeFillColor(rowStyle: TimelineRowStyle, options: TimelineOptions): string;
    static getRowMarginBottom(rowStyle: TimelineRowStyle, options: TimelineOptions): number;
    static keyframeDraggable(keyframe: TimelineKeyframeStyle | null, rowStyle: TimelineRowStyle | null, options: TimelineOptions | null, defaultValue?: boolean): boolean;
    static stripeDraggable(rowStyle: TimelineRowStyle, options: TimelineOptions, defaultValue?: boolean): boolean;
}