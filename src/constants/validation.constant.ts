/**
 * @author Has
 * @reg_date 2018-05-05
 * @summary ValidationConstant
 * @description 벨리데이션 상수
 */

export class ValidationConstant {
	public validate: Types.Response.Dictionary<Types.Response.Pattern> = {
		author: {
			pattern: 1,
			message: '이름을 입력해주세요.'
		},
		comment: {
			pattern: 10,
			message: '댓글은 10자이상 입력해주세요.'
		}
	};
}
