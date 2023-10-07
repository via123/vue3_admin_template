/*
 * @Author: qianyun.1108 lvqianyun
 * @Date: 2023-10-03 15:25:12
 * @LastEditors: qianyun.1108 lvqianyun
 * @LastEditTime: 2023-10-03 15:42:20
 * @FilePath: /project/src/api/user/type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 登录接口需要携带参数ts类型
export  interface loginForm {
    username: string,
    password: string
}

interface dataType {
    token: string
}

// 登录接口返回数据类型
export interface loginResponseData {
    code:number,
    data: dataType
}


// 服务器返回用户信息相关数据类型
interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}

interface user{
    checkUser: userInfo
}

export interface userResponseData{
    code: number,
    data: user
}