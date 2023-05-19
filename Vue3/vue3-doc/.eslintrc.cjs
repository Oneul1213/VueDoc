/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // root : 현재 폴더 위치를 기준으로 하위의 파일에만 린트 적용. 상위 폴더에 적용하지 않음.
  root: true,
  // 린트의 기본적인 문법 검사 규칙 이외에 추가적인 규칙들을 적용.
  // (이미 누군가에 의해 정해진 몇 개의 규칙을 추가하는 것.)
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  // NPM으로 설치하여 사용할 수 있는 확장 규칙. 린트를 대중적인 라이브러리와 결합하여 사용.
  // plugins: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // 린트를 실행할 때 사용자가 임의로 규칙을 추가하여 검사에서 제외 또는 추가하는 속성.
  rules : {
    // 0 : 무시
    // 1 : Warring
    // 2 : Error
    "vue/multi-word-component-names": 0,
    "no-unused-vars": 1,
  }
}
