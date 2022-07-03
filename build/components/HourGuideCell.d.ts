import dayjs from 'dayjs';
import { CalendarCellStyle } from 'src';
interface HourGuideCellProps {
    cellHeight: number;
    onPress: (d: dayjs.Dayjs) => void;
    date: dayjs.Dayjs;
    hour: number;
    index: number;
    calendarCellStyle?: CalendarCellStyle;
}
export declare const HourGuideCell: ({ cellHeight, onPress, date, hour, index, calendarCellStyle, }: HourGuideCellProps) => JSX.Element;
export {};
