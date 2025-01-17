const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const userServices = require('../../services/user');
const { createJwtAccessToken } = require('../../utils/jwt');
/*
    POST /api/users/login
    * 사용자 로그인 API
*/
exports.login = async (req, res, next) => {
  try {
    const { id, nickname } = req.user;
    const accessToken = createJwtAccessToken({ id, nickname });
    res.status(CREATED).json({
      message: '사용자 로그인 성공',
      accessToken,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: '사용자 로그인 실패',
    });
  }
};

/*
    GET /api/users/{id}
    * id 중복 조회
*/
exports.isDuplicated = async (req, res, next) => {
  try {
    const { id } = req.params;
    const isDuplicated = await userServices.isDuplicated(id);

    res.status(OK).json({
      message: 'ID 중복 조회 성공',
      isDuplicated,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: 'ID 중복 조회 실패',
    });
  }
};

/*
    GET /api/users
    * 전체 사용자 목록 조회 API
*/
exports.getUsers = async (req, res, next) => {
  try {
    const users = await userServices.getUsers();

    res.status(OK).json({
      message: '전체 사용자 목록 조회 성공',
      data: users,
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: '전체 사용자 목록 조회 실패',
    });
  }
};

/*
    POST /api/users/
    * 사용자 가입(추가) API
*/
exports.setUser = async (req, res, next) => {
  try {
    const { id, password, nickname, description } = req.body;
    await userServices.setUser({ id, password, nickname, description });
    res.status(CREATED).json({
      message: '사용자 가입 성공',
    });
  } catch (error) {
    res.status(BAD_REQUEST).json({
      message: '사용자 가입 실패',
    });
  }
};

/*
    GET /api/users/info
    * 사용자 정보 조회 API
*/
exports.getUserInfo = async (req, res, next) => {
  try {
    const userNo = req.user.no;
    const user = await userServices.getUserInfo(userNo);
    res.status(OK).json({
      message: '사용자 정보 조회 성공',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/*
    GET /api/users/info/:id
    * 특정 사용자 정보 조회 API
*/

exports.getUserInfoByNo = async (req, res, next) => {
  try {
    const { no } = req.params;
    const user = await userServices.getUserInfo(no);

    res.status(OK).json({
      message: '사용자 정보 조회 성공',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
