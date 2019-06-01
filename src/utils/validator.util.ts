/**
 * @author Has
 * @reg_date 2018-05-05
 * @summary Validator
 * @description 벨리데이션 체크
 */

import { ValidationConstant } from '../constants/validation.constant';

class Validator extends ValidationConstant {
    /**
     * @author HoChoel Eom
     * @param {name} 필드 네임
     * @param {value} 필드 밸류
     * @description 밸리데이션 체크 메서드
     */
	public check(name: string, value: string | number) {
        const validate: Types.Response.Pattern = this.validate[name];
        if (value <= validate.pattern) {
            // message
            alert(validate.message);
            return false;
        }
        return true;
	}
}

const validator = new Validator();

export default validator;
