const errorCode = {
  '-1': {
    text: '系统繁忙',
  },
  200: {
    text: '操作成功',
  },
  40000: {
    text: '未知错误',
  },
  40001: {
    text: '访问过于频繁',
  },
  40002: {
    text: '令牌过期',
  },
  40003: {
    text: '令牌无效',
  },
  40004: {
    text: '没有权限',
  },
  40005: {
    text: '数据验证失败',
  },
  40006: {
    text: '该用户已存在',
  },
};

module.exports = errorCode;
