import api from '../ax/axiosSetting'

    /**
     * 
     * @param {id: 검사 아이디} obj 
     * @returns 
     */

export const memberIdCheck = (obj) => {
    return api.post('/member/findId', JSON.stringify(obj)
    ,{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}
/**
 * 회원가입 
 * 지역 리스트 불러오기
 * @returns
 */
export const areaList = () => {
    return api.get('/area/list')
}

export const memberRegist = (obj) => {
    return api.post('/member/regist', JSON.stringify(obj))
}