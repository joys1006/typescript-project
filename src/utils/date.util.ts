/**
 * @author Has
 * @reg_date 2018-05-05
 * @summary DateFormatter
 * @description 날짜 변환
 */

class DateFormatter {
	/**
     * @author HoChoel Eom
     * @description 날짜 포메터
     */
	public getDateFormatter(date: number | string | undefined) {
		return (date) ? new Date(date) : null;
	}
}

const date = new DateFormatter();

export default date;
