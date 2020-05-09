import { TimelineRowStyle } from './styles/timelineRowStyle';
import { TimelineStyle } from './styles/timelineStyle';

export interface TimelineOptions {
  /**
   * Id or HTMLElement of the timeline container.
   */
  id?: string | HTMLElement;
  /**
   * Snap the mouse to the values on a timeline.
   * Value can be from 1 to 60
   */
  snapsPerSeconds?: number;
  /**
   * Check whether snapping is enabled.
   */
  snapEnabled?: boolean;
  /**
   *  Snap all selected keyframes as a bundle during the drag.
   */
  snapAllKeyframesOnMove?: boolean;
  /**
   * approximate step for the timeline in pixels for 1 second
   */
  stepPx?: number;
  stepSmallPx?: number;
  smallSteps?: number;
  /**
   * additional left margin in pixels to start the line gauge from.
   */
  leftMarginPx?: number;
  /**
   * Component header background color.
   */
  headerFillColor?: string;
  /**
   * Component background color.
   */
  fillColor?: string;
  labelsColor?: string;
  /**
   * Header gauge tick color.
   */
  tickColor?: string;
  /**
   * Selection rectangle color.
   */
  selectionColor?: string;

  /**
   * Default rows style.
   * Can be overridden by setting style individually for each row.
   */
  rowsStyle?: TimelineRowStyle;
  /**
   * Timeline indicator style.
   */
  timelineStyle?: TimelineStyle;
  /**
   * Header height in pixels
   */
  headerHeight?: number;
  /**
   * Header ticks font
   */
  font?: string;
  zoom?: number;
  /**
   * Zoom speed. Use percent of the screen to set zoom speed.
   */
  zoomSpeed?: number;
  // Max zoom
  zoomMin?: number;
  // Min zoom
  zoomMax?: number;
  /**
   * Set this to true in a MAC OS environment: The Meta key will be used instead of the Ctrl key.
   */
  controlKeyIsMetaKey?: boolean;
  /**
   * Access the scroll container via this class for e.g. scroll bar styling.
   */
  scrollContainerClass?: string;
  /**
   * keyframes stripe is draggable.
   */
  stripesDraggable?: boolean;
  /**
   * keyframes stripe is draggable.
   */
  keyframesDraggable?: boolean;
}
