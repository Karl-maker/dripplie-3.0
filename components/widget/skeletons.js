import WidgetSkeleton from "./skeleton";

const SKELETON_WIDTH = "95%";

const tall = 300;
const short = 180;

const loadWidgets = [
  [
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
  ],
  [
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
  ],
  [
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
  ],
  [
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
  ],
  [
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
  ],
  [
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={short} width={SKELETON_WIDTH} />,
    <WidgetSkeleton height={tall} width={SKELETON_WIDTH} />,
  ],
];

/**
 * @author Karl-Johan Bailey
 * @created 12/12/2022
 * @desc List of Widgets for loading
 *
 */

export default loadWidgets;
